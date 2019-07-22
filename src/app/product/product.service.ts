import { ProductModel } from './product.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProductService{
    bookChanged = new Subject<ProductModel[]>();

    private books: ProductModel[] = [];

    // private books: ProductModel[] = [
    //     new ProductModel('Harry Potter and the Sorcerers Stone',
    //     'https://is2-ssl.mzstatic.com/image/thumb/Video128/v4/55/60/fc/5560fcab-339a-1ca5-9193-555c9ff31df1/pr_source.lsr/268x0w.png',
    //     'Harry Potter and the Philosophers Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowlings debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.',
    //     4.89, 0, 0),
    //     new ProductModel('Harry Potter and the Prisoner of Azkaban',
    //     'http://prodimage.images-bn.com/pimages/9781781100516_p0_v3_s1200x630.jpg',
    //     'Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry.',
    //     6.59, 0, 0),
    //     new ProductModel('Harry Potter and the Cursed Child',
    //     'https://static.playbill.com/dims4/default/ecd7cd5/2147483647/resize/x250%3C/quality/90/?url=http%3A%2F%2Fplaybill-brightspot.s3.amazonaws.com%2Fe7%2F95%2F635214f14325a97538c13b6fadf8%2Fharry-potter-and-the-cursed-child-part-one-playbill-2018-03-16-web.jpg',
    //     'Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on July 30, 2016.',
    //     9.93, 0, 0)
    // ];

    setBooks(books: ProductModel[]){
        this.books = books;
        this.bookChanged.next(this.books.slice());
    }

    getBooks() {
        return this.books.slice();
    }

    getBook(id: number){
        return this.books[id];
    }

    setBookAmount(id:number, quantity: number){
        this.books[id].quantity = quantity;
        this.books[id].totalAmount =  this.books[id].price * quantity;
    }

    addBook(book: ProductModel){
        this.books.push(book);
        this.bookChanged.next(this.books.slice());
    }

}