import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shoppingCart.service';
import { ShoppingCart } from '../shopping-cart/shoppingCart.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    private cartItemsCount: number = 0;
    cartItem: ShoppingCart[];
    subscription: Subscription;

    constructor(private shoppingCartService: ShoppingCartService,
        private route: ActivatedRoute,
        private router: Router){

    }

    ngOnInit(){
        this.subscription = this.shoppingCartService.cartChanged.subscribe(
            (cartItem: ShoppingCart[])=>{
                this.cartItem = cartItem;
                this.cartItemsCount++;
            }
        );
    }

    onCheckOut(){
        this.router.navigate(['/shopping-cart'], {relativeTo: this.route});
    }

    onAdd(){
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}