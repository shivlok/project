import { Component, OnInit,ViewChild,Inject, Host } from '@angular/core';
import { Shoe } from '../shared/shoe';
import { ShoesService } from '../services/shoes.service';
import { Router } from '@angular/router';
import { Headers,Http,RequestOptions } from '@angular/http';
import { flyInOut,expand } from '../animations/app.animation';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    '@flyInOut':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  
  fshoe:Shoe[];
  errMess:string;
  InfoMess='';

  
  @ViewChild('regForm')registrationFormDirective; 

  constructor(private shoesService : ShoesService,
    private router:Router,
    private regComponent : RegistrationComponent,
    @Inject('BaseURL') private BaseURL) { 
     
    }
  

  ngOnInit() {

    this.shoesService.getFeaturedShoe().subscribe(fshoe =>this.fshoe=fshoe,
    errmess => this.errMess = <any> errmess); 
  }
 
  
  
}

