import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements  OnInit{
   
  constructor(private productService:ProductsService){
    
  }


  ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next:(data:productData[])=>{
          if(data.length > 0){
            console.log(data);
            
          }
        }
      });
  }
  
}
