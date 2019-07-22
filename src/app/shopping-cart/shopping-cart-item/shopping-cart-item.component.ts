import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../shoppingCart.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartItem: ShoppingCart;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
