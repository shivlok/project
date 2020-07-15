import { Component, OnInit,Inject} from '@angular/core';
import { MatDialog,MatDialogRef} from '@angular/material';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { User } from '../shared/user';
import { baseURL } from '../shared/baseurl';
import { Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { Registration } from '../shared/Registration';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

regUser;
  user:User = {username:'',password:'',remember:false};
  
  

  constructor(public dialogRef : MatDialogRef<LoginComponent>,
    private http:HttpClient,
    private router:Router,
    private processHTTPMsgService:ProcessHTTPMsgService,
    @Inject('BaseURL') private BaseURL) { 

    }


  ngOnInit() {
    this.getRegisteredUsers().subscribe((regUsers) => {
      this.regUser=regUsers;

    });
  }
  getRegisteredUsers():Observable<Registration[]>{
    return this.http.get<Registration[]>(baseURL+'registerUser')
    .pipe(catchError(this.processHTTPMsgService.handleError));
   
  }

  onSubmit(){
    
    if(this.regUser.find(foundUser=> foundUser.username==this.user.username ) &&
       this.regUser.find(foundUser=> foundUser.password==this.user.password)){
         this.router.navigate(['/afterlog']);
    }
    else{
      window.alert("Login unsuccessfull!");
      this.router.navigate(['/home']);
    }
    this.dialogRef.close();
    
  }
  
}
