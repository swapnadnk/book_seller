import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from '../product/product.model';
import { ShoppingCart } from './shoppingCart.model';

@Injectable()
export class ShoppingCartService{
    cartChanged = new Subject<ShoppingCart[]>();

    cartItems: number = 0;
    cartTotalAmount: number = 0;

    private cart: ShoppingCart[] = [];

    private books: ProductModel[] = [];

    addToCart(book: ProductModel){
        const newItem = new ShoppingCart(book);
        this.cart.push(newItem);
        this.cartTotalAmount += newItem.item.totalAmount;
        this.cartChanged.next(this.cart.slice());
        this.cartItems++;
    };

    getCart(){
        return this.cart.slice();
    }

    getCartTotalAmount(){
        return this.cartTotalAmount;
    }
}