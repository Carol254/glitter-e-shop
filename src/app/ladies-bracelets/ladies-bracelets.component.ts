import { Component, OnInit } from '@angular/core';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ladies-bracelets',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ladies-bracelets.component.html',
  styleUrl: './ladies-bracelets.component.css'
})
export class LadiesBraceletsComponent implements OnInit{
  
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
