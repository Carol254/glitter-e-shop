import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { productData } from '../models/products';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent implements OnInit{

  productDetails!: productData;

  productInfo!:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis fugit autem illum nobis voluptas ea, consequatur optio veritatis facilis tenetur corrupti dicta. Tempore minus reiciendis explicabo quo eum atque excepturi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis fugit autem illum nobis voluptas ea, consequatur optio veritatis facilis tenetur corrupti dicta. Tempore minus reiciendis explicabo quo eum atque excepturi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis fugit autem illum nobis voluptas ea, consequatur optio veritatis facilis tenetur corrupti dicta. Tempore minus reiciendis explicabo quo eum atque excepturi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis fugit autem illum nobis voluptas ea, consequatur optio veritatis facilis tenetur corrupti dicta. Tempore minus reiciendis explicabo quo eum atque excepturi?'

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
}
