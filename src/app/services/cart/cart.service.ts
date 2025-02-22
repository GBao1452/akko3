import { Injectable } from '@angular/core';
import {KeyboardModel} from '../../models/keybroad.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart : KeyboardModel[] = [];
  addToCart(item: KeyboardModel) {
    console.log('item added to cart', item);
    this.cart.push(item);
  }
}
