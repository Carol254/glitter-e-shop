import { NgFor } from '@angular/common';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements  OnInit{

  products:productData[]= [];
  products$!: Observable<productData[]>;
  selectedId!: number;
  
   
  constructor(private productService:ProductsService ,private router:Router){}


  ngOnInit(): void {
   this.getProductList();
  }

  getProductList(){
    this.productService.getAllProducts().subscribe({
      next:(data:productData[])=>{
        if(data.length > 0){
          console.log(data);

          for(let i=0;i<data.length;i++){
            console.log(data[i]);
            
          }
          this.products = data;
        }
      }
    });
  }

  buyNow(productId:number){
    this.router.navigate(['/product-details',{id:productId}]);
  }
  
}
