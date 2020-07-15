import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  openCart(){
    this.dialog.open(CartComponent,{width:'500px'});
  }
  openLoginForm(){
    this.dialog.open(LoginComponent,{ width:'500px' , height:'450px'});
  }

}
