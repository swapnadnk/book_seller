export class ProductModel {
    name: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
    totalAmount: number;

    constructor(name: string, image: string, description: string, price: number, quantity: number, totalAmount: number){
        this.name =  name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.totalAmount = totalAmount;
    }

}