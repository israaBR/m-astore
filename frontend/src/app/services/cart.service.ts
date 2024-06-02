import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Parfum } from '../shared/models/Parfum';
import { CartItem } from '../shared/models/CartItms';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = this.getCartFromLocalStorage(); 
private cartSubject: BehaviorSubject<Cart> 
= new BehaviorSubject(this.cart);
  constructor() { }


  addToCart(parfum:Parfum):void{
    let cartItem = this.cart.items
    .find(item => item.parfum.id === parfum.id);
    if(cartItem)
      return;
    this.cart.items.push(new CartItem(parfum));
   this.setCartToLocalStorage();
  }

  removeFromCart(parfumId: string):void{
    this.cart.items = this.cart.items
    .filter(item => item.parfum.id != parfumId);
    this.setCartToLocalStorage();
  }

  changeQuantity(parfumId:string, quantity: number){
    let cartItem = this.cart.items
    .find(item => item.parfum.id === parfumId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.parfum.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart():Cart{
    return this.cartSubject.value;
  }
  
  private setCartToLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
      this.cart.totalPrice = this.cart.items
        .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
  
      this.cart.totalCount = this.cart.items
        .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
  
      const cartJson = JSON.stringify(this.cart);
      localStorage.setItem('Cart', cartJson);
      this.cartSubject.next(this.cart);
    }
  }
  
  private getCartFromLocalStorage(): Cart {
    if (typeof localStorage !== 'undefined') {
      const cartJson = localStorage.getItem('Cart');
      return cartJson ? JSON.parse(cartJson) : new Cart();
    } else {
      return new Cart(); // Return a default empty cart if localStorage is not available
    }
  }
}  
