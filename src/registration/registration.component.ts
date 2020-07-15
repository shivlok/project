import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { Registration,Gender} from '../shared/Registration';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm : FormGroup;
  register:Registration;
  gender=Gender;
  @ViewChild('regForm') registrationFormDirective;

  constructor(private fb : FormBuilder,
    private http : HttpClient,
    private router : Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  

  createForm(){
    this.registrationForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      DOB:['',Validators.required],
      gender:['Male',Validators.required],
      email:['',Validators.required],
      telnum:[0,Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      newUser:false
    });
  }
  onSubmit(){
    this.register=this.registrationForm.value;
    this.registrationForm.reset({
      firtname:'',
      lastname:'',
      DOB:'',
      gender:'Male',
      email:'',
      telnum:0,
      username:'',
      password:'',
      newUser:false
    });
    this.registrationFormDirective.reset();

    let result = JSON.stringify(this.registrationForm.value);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
      return this.http.post( 'http://localhost:3000/registerUser', this.register , httpOptions)
      .subscribe(
        success => console.log(success),
        err => console.log(err));
  }
}
