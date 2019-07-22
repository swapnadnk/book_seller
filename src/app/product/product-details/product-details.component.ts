import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductModel } from '../product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShoppingCartService } from 'src/app/shopping-cart/shoppingCart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  book: ProductModel;
  id: number;
  totalAmountForm: FormGroup;
  amount: number;
  
  constructor(private productService: ProductService,
    private shippingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.id = params['id'];
      this.book = this.productService.getBook(this.id);
      this.initForm();
    });
  }

  onSubmit(){
    this.productService.setBookAmount(this.id, this.totalAmountForm.value['quantity']);
    this.shippingCartService.addToCart(this.productService.getBook(this.id));
    //console.log(this.productService.getBook(this.id));
  }

  onContinueShopping(){
    this.router.navigate(['../'], {relativeTo: this.route});

  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  initForm(){
    let bookQuantity = null;
    this.totalAmountForm = new FormGroup({
      'quantity': new FormControl(bookQuantity, Validators.required)
    });
  }

}
