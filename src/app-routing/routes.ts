import { Routes } from '@angular/router';
import { AfterlogComponent } from '../afterlog/afterlog.component';
import { HomeComponent } from '../home/home.component';
import { ShoedetailComponent } from '../shoedetail/shoedetail.component';
import { CartComponent } from '../cart/cart.component';

export const routes : Routes =[
    {path : 'home' ,component:HomeComponent},
    {path : 'afterlog' ,component:AfterlogComponent},
    {path: 'shoedetail/:id' ,component:ShoedetailComponent},
    {path: 'cart' , component:CartComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];