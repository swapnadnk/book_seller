import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  books: ProductModel[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.books = this.productService.getBooks();
  }

}
