import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ladies-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ladies-products.component.html',
  styleUrl: './ladies-products.component.css'
})
export class LadiesProductsComponent implements OnInit {

  constructor(private productsService:ProductsService){}

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

}
