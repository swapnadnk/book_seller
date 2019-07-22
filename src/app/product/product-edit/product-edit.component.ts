import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductModel } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  editMode = false;
  bookForm: FormGroup;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    if(this.editMode){
      //edit code;
    } else {
      this.productService.addBook(this.bookForm.value);
      this.dataStorageService.storeBooks();
      console.log(this.bookForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let bookName = '';
    let bookImagePath = '';
    let bookDescription = '';
    let bookPrice = 0;

    if(this.editMode){
      //edit code;
    } else {
      this.bookForm = new FormGroup({
        'name': new FormControl(bookName, Validators.required),
        'imagePath': new FormControl(bookImagePath, Validators.required),
        'description': new FormControl(bookDescription, Validators.required),
        'price': new FormControl(bookPrice, Validators.required),
      });
    }
  }

}
