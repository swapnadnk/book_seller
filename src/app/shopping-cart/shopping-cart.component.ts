import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from './shoppingCart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from './shoppingCart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  cartItems: ShoppingCart[];
  cartTotalAmount: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartItems = this.shoppingCartService.getCart();
    console.log(this.shoppingCartService.getCartTotalAmount());
    this.cartTotalAmount = this.shoppingCartService.getCartTotalAmount();
    // this.subscription = this.shoppingCartService.cartChanged
    // .subscribe((cartItems: ShoppingCart[])=>{
    //   this.cartItems = cartItems;
    //   console.log(this.cartItems);
    // });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
