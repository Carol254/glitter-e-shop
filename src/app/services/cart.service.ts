import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productData } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = new BehaviorSubject<number>(0);
  items$ = this.items.asObservable();

  private productIds = new BehaviorSubject<productData[]>([]);
  productIds$ = this.productIds.asObservable();

  addItem(productId: any) {
    this.items.next(this.items.value + 1);
    this.productIds.next([...this.productIds.value, productId]);
  }

  removeItem(productId: any) {
    const currentCount = this.items.value;
    if (currentCount > 0) {
      this.items.next(currentCount - 1);
      this.productIds.next(this.productIds.value.filter(item => item !== productId));
    }
  }

  getItemCount(): number {
    return this.items.value;
  }

  getProductIds(): productData[] {
    return this.productIds.value;
  }
}


