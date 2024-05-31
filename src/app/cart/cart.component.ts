import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  itemCount = 0;
  products: productData[] = [];
  tPrice:any;
  @ViewChild('totalPrice',{static:false}) totalPrice!:ElementRef;

  constructor(private cartService:CartService ,private productService:ProductsService, private route:ActivatedRoute ,private router:Router){}


    ngOnInit() {
      this.cartService.items$.subscribe(count => {
        this.itemCount = count;
      });

      this.cartService.productIds$.subscribe(ids => {
        this.products = [];
        ids.forEach(id => {
          const productId = id;
          this.productService.getAllProductsById(productId).subscribe(product => {
            this.products.push(product);
            console.log(this.products);
            this.products.forEach((obj)=>{
              if(obj.price)
                {
                  this.totalPrice.nativeElement.innerHTML = obj.price * this.itemCount;
                }
            });
          });
        });
      }); 
    }
  

    onCheckOut(){
      this.router.navigate(['/checkout']);
    }

    noItemsInCart():boolean{
     return  this.itemCount === 0;
    }

    toShop(){
      this.router.navigate(['/all-products']);
    }
  
    addItems(productId:any) {
      console.log('from details',productId);
      this.cartService.addItem(productId);
      this.itemCount = this.cartService.getItemCount();

    }
  
    deleteItems(productId:any) {
      this.cartService.removeItem(productId);
      this.itemCount = this.cartService.getItemCount();
      if (this.itemCount === 0) {
  
      }
    }

    removeFromCart(productId:any){
      this.cartService.removeItem(productId);
      
    }

    removeProduct(productId:any){
      this.cartService.removeItem(productId)
    }
}