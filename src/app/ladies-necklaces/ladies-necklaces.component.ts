import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ladies-necklaces',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ladies-necklaces.component.html',
  styleUrl: './ladies-necklaces.component.css'
})
export class LadiesNecklacesComponent  implements OnInit{

  constructor(private productsService:ProductsService ,private router:Router){}
  
  ladiesProducts:productData[] = [];

  ngOnInit(): void {
      this.getLadiesNecklaces();
  }

  getLadiesNecklaces(){
    this.productsService.getLadiesNecklaces().subscribe({
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
