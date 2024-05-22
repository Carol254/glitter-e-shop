import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mens-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mens-products.component.html',
  styleUrl: './mens-products.component.css'
})
export class MensProductsComponent {

  constructor(private productsService:ProductsService){}

  mensProducts:productData[] = [];

  ngOnInit(): void {
      this.getMensProducts();
  }

  getMensProducts(){
    this.productsService.getMensProducts().subscribe({
      next:(data)=>{
        console.log(data);
        this.mensProducts = data;
      }
    })
  }
}
