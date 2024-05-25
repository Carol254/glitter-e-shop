import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ladies-rings',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ladies-rings.component.html',
  styleUrl: './ladies-rings.component.css'
})
export class LadiesRingsComponent implements OnInit {
  
  constructor(private productsService:ProductsService ,private router:Router){}
  
  ladiesProducts:productData[] = [];

  ngOnInit(): void {
      this.getLadiesRings();
  }

  getLadiesRings(){
    this.productsService.getLadiesRings().subscribe({
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
