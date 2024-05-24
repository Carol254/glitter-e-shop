import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-ladies-earrings',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ladies-earrings.component.html',
  styleUrl: './ladies-earrings.component.css'
})
export class LadiesEarringsComponent implements OnInit{
  
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
