import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';

@Component({
  selector: 'app-ladies-necklaces',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ladies-necklaces.component.html',
  styleUrl: './ladies-necklaces.component.css'
})
export class LadiesNecklacesComponent  implements OnInit{

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
