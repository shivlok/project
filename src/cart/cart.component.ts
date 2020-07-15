import {Component, OnInit,Inject} from '@angular/core';
import {CartService} from '../services/cart.service';
import {Shoe} from '../shared/shoe';
import {Observable,of} from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  

  constructor(private cartService:CartService,
    @Inject('BaseURL') private BaseURL) {}

  ngOnInit() {
   
    this.items=this.cartService.getItems();
  }


}
