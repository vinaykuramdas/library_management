import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';


import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private router:Router) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  login(){
    if(this.loginForm.valid){
      alert('login Success!!redirecting to student main page.')
      this.router.navigate(['/main'])
    }
  }

}
