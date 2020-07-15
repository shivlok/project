import { Component, OnInit,Inject,Host} from '@angular/core';
import { Shoe } from '../shared/shoe';
import { ShoesService } from '../services/shoes.service';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { visibility,flyInOut ,expand} from '../animations/app.animation';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shoedetail',
  templateUrl: './shoedetail.component.html',
  styleUrls: ['./shoedetail.component.scss'],
  host:{
    '@flyInOut':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    visibility(),
    expand()
  ]
})
export class ShoedetailComponent implements OnInit {

  
  shoe:Shoe;
  shoeIds:string[];
  prev:string;
  next:string;
  errMess:string;
  visibility='shown';

  


  constructor(private shoeService:ShoesService,
    private route:ActivatedRoute,
    private location:Location,
    private cartService:CartService,
    @Inject('BaseURL') private BaseURL) { }

    addToCart(shoe){
      this.cartService.addToCart(shoe);
      window.alert("Your item has been added to cart!");
    }

  ngOnInit() {
    this.shoeService.getShoeIds()
     .subscribe(shoeIds => this.shoeIds = shoeIds);
    this.route.params.pipe(switchMap((params: Params) => {this.visibility='hidden';  return this.shoeService.getShoe(params['id']);}))
    .subscribe(shoe => { this.shoe = shoe; this.setPrevNext(shoe.id);this.visibility='shown'; },
    errmess => this.errMess= <any> errmess);

    
  }

  setPrevNext(shoeId:string){
    const index = this.shoeIds.indexOf(shoeId);
    this.prev = this.shoeIds[(this.shoeIds.length + index - 1) % this.shoeIds.length];
    this.next = this.shoeIds[(this.shoeIds.length + index + 1) % this.shoeIds.length];
  }

 goBack():void{
   this.location.back();
 }

}
