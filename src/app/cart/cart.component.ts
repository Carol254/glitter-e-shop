import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  itemCount = 0;
  products: productData[] = [];

  constructor(private cartService:CartService ,private productService:ProductsService, private route:ActivatedRoute){}


  ngOnInit() {
    this.cartService.items$.subscribe(count => {
      this.itemCount = count;
    });

    this.cartService.productIds$.subscribe(ids => {
      this.products = [];
      ids.forEach(id => {
        // Retrieve product details using ActivatedRoute
        const productId = id;
        this.productService.getAllProductsById(productId).subscribe(product => {
          this.products.push(product);
          console.log(this.products);
          
        });
      });
    });
  }
  
}