import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-ladies-rings',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ladies-rings.component.html',
  styleUrl: './ladies-rings.component.css'
})
export class LadiesRingsComponent implements OnInit {
  
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
