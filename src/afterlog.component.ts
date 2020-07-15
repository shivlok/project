import { Component, OnInit ,Inject,Host} from '@angular/core';
import { Shoe } from '../shared/shoe';
import { ShoesService } from '../services/shoes.service';
import { flyInOut,expand } from '../animations/app.animation'; 

@Component({
  selector: 'app-afterlog',
  templateUrl: './afterlog.component.html',
  styleUrls: ['./afterlog.component.scss'],
  host:{
    '@flyInOut':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class AfterlogComponent implements OnInit {

  shoes:Shoe[];
  errMess:string;
  constructor(private shoeService : ShoesService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.shoeService.getShoes().subscribe(shoes =>this.shoes=shoes,
    errmess=>this.errMess=<any>errmess);
  }
 
}
