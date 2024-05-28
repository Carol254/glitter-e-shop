// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = new BehaviorSubject<number>(0);
  items$ = this.items.asObservable();

  addItem() {
    this.items.next(this.items.value + 1);
  }

  removeItem() {
    const currentCount = this.items.value;
    if (currentCount > 0) {
      this.items.next(currentCount - 1);
    }
  }

  getItemCount(): number {
    return this.items.value;
  }
}
