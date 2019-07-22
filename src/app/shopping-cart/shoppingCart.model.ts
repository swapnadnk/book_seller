import { ProductModel } from '../product/product.model';

export class ShoppingCart{
    public item: ProductModel;

    constructor(item: ProductModel){
        this.item = item;
        //this.grandTotal = grandTotal;
    }
}