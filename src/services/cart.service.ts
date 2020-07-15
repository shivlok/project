import {Injectable} from '@angular/core';
import {Shoe} from '../shared/shoe';
import{ baseURL } from '../shared/baseurl';


@Injectable()
export class CartService {
  items=[];

  constructor(){ }

  addToCart(item:Shoe){
   this.items.push(item);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

}