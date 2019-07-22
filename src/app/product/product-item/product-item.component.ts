import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() book: ProductModel;
  @Input() index: number;
  selected = false;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSelect(){
    this.selected = !this.selected;
  }

  toDetails(){
    this.id = this.index;
    this.router.navigate([this.id], {relativeTo: this.route});
  }

}
