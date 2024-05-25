import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ladies-earrings',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ladies-earrings.component.html',
  styleUrl: './ladies-earrings.component.css'
})
export class LadiesEarringsComponent implements OnInit{
  
  constructor(private productsService:ProductsService ,private router:Router){}
  
  ladiesProducts:productData[] = [];

  ngOnInit(): void {
      this.getLadiesEarrings();
  }

  getLadiesEarrings(){
    this.productsService.getLadiesEarrings().subscribe({
      next:(data)=>{
        console.log(data);
        this.ladiesProducts = data;
      }
    })
  }

  buyNow(productId:number){
    this.router.navigate(['/product-details',{id:productId}]);
  }
}
