import { Component, OnInit } from '@angular/core';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-ladies-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './all-ladies-products.component.html',
  styleUrl: './all-ladies-products.component.css'
})
export class AllLadiesProductsComponent implements OnInit{
  
  constructor(private productsService:ProductsService ,private router:Router){}
  
  ladiesProducts:productData[] = [];

  ngOnInit(): void {
      this.getLadiesProducts();
  }

  getLadiesProducts(){
    this.productsService.getLadiesProducts().subscribe({
      next:(data)=>{
        console.log(data);
        this.ladiesProducts = data;
      }
    })
  }

  buyNow(){
    this.router.navigate(['/product-details']);
  }
}
