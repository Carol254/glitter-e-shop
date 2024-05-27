import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent implements OnInit{

  productDetails!: productData;
  showAddToCartBtn:boolean = true;

  @ViewChild('counter',{static:false}) counter !: ElementRef;

  constructor(private route:ActivatedRoute ,private productService:ProductsService){}

  ngOnInit(): void {
      this.getProductDetails();
  }

  getProductDetails(){
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getAllProductsById(productId).subscribe({
      next:(data)=>{
        console.log(data);
        this.productDetails = data;
      }
    })
  }

  addToCart(){
    this.counter.nativeElement.classList.remove('d-none');
    window.alert('Product added successfully');
    this.showAddToCartBtn = false;
  }

  addItems(){

  }

  deleteItems(){
    
  }
}
