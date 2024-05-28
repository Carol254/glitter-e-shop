import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [NgIf,HeaderComponent,AppComponent],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent implements OnInit{

  productDetails!: productData;
  showAddToCartBtn:boolean = true;

  itemCount: number = 0;


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

  addToCart() {
    this.showAddToCartBtn = false;
    this.itemCount = 1;
    window.alert('Product added successfully');
  }

  addItems() {
    this.itemCount++;
  }

  deleteItems() {
    if (this.itemCount > 1) {
      this.itemCount--;
    } else {
      this.itemCount = 1;
      this.showAddToCartBtn = true;
    }
  }
}
