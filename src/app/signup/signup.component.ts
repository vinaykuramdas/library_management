import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private formBuilder : FormBuilder,private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required,Validators.email],
      collage:['',Validators.required],
      class:['',Validators.required],
      section:['',Validators.required]
    });
  }

  get f(){
    return this.signupForm.controls;
  }

  signup(){
    if(this.signupForm.valid){
      this.router.navigate(['']);
    }
  }

}
