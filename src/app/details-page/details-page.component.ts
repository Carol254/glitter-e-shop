import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [NgIf,HeaderComponent,AppComponent],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent implements OnInit{

  productDetails!: productData;
  showAddToCartBtn:boolean = true;

  itemCount: number = 0;


  @ViewChild('counter',{static:false}) counter !: ElementRef;
  @Input()productId!: number;

  constructor(private route:ActivatedRoute ,private productService:ProductsService ,private cartService:CartService){}

  ngOnInit(): void {
      this.getProductDetails();
  }

  getProductDetails(){
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getAllProductsById(productId).subscribe({
      next:(data)=>{
        console.log(data);
        this.productDetails = data;
      }
    })
  }

  addToCart(productId:any) {
    this.cartService.addItem(productId);
    this.showAddToCartBtn = false;
    this.itemCount = 1;
    window.alert('Product added successfully');
  }

  addItems(productId:any) {
    console.log('from details',productId);
    this.cartService.addItem(productId);
    this.itemCount = this.cartService.getItemCount();
    this.showAddToCartBtn = false;
  }

  deleteItems(productId:any) {
    this.cartService.removeItem(productId);
    this.itemCount = this.cartService.getItemCount();
    if (this.itemCount === 0) {
      this.showAddToCartBtn = true;
    }
  }
}
