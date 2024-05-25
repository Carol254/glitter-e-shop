import { Component, OnInit } from '@angular/core';
import { productData } from '../models/products';
import { ProductsService } from '../services/products.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ladies-bracelets',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ladies-bracelets.component.html',
  styleUrl: './ladies-bracelets.component.css'
})
export class LadiesBraceletsComponent implements OnInit{
  
  constructor(private productsService:ProductsService ,private router:Router){}
  
  ladiesProducts:productData[] = [];

  ngOnInit(): void {
      this.getLadiesBracelets();
  }

  getLadiesBracelets(){
    this.productsService.getLadiesBracelets().subscribe({
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
