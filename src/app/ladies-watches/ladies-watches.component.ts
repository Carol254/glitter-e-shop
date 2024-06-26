import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
  
  constructor(private productsService:ProductsService ,private router:Router){}

  ladiesProducts:productData[] = [];

  ngOnInit(): void {
      this.getLadiesWatches();
  }

  getLadiesWatches(){
    this.productsService.getLadiesWatches().subscribe({
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
