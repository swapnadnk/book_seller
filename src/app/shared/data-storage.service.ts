import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ProductService } from '../product/product.service';
import { ProductModel } from '../product/product.model';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient,
        private productService: ProductService){};
    
    storeBooks(){
        const books = this.productService.getBooks();
        this.http.put('https://ng-books-b53af.firebaseio.com/books.json', books)
        .subscribe(response => {
            console.log(response);
        })
    }

    fetchBooks(){
        return this.http
        .get<ProductModel[]>(
            'https://ng-books-b53af.firebaseio.com/books.json'
        ).pipe(
            map(books=>{
                return books.map(book=>{
                    return{...book};
                });
            }),
            tap(books => {
                this.productService.setBooks(books);
            })
        );
    }
}