import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-ladies-watches',
  standalone: true,
  imports: [NgFor,RouterOutlet],
  templateUrl: './ladies-watches.component.html',
  styleUrl: './ladies-watches.component.css'
})
export class LadiesWatchesComponent implements OnInit{
  
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
