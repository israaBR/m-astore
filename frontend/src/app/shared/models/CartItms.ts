import { Parfum } from "./Parfum";

export class CartItem{
    constructor(public parfum:Parfum){
        
    }
   
    quantity:number = 1;
    price: number = this.parfum.price;

    
}