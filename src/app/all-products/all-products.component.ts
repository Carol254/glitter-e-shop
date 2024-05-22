import { NgFor } from '@angular/common';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements  OnInit{

  products:productData[]= [];
   
  constructor(private productService:ProductsService){}


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
  
}
