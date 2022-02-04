import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,Validators,FormBuilder, FormControl } from '@angular/forms';
// import { Console } from 'console';
// import { ConsoleReporter } from 'jasmine';


@Component({
  selector: 'app-home',
  templateUrl:'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  LoginInputValue: FormGroup;
  submit: false;
  

  constructor(private router:Router,public fb:FormBuilder) {
    this.LoginInputValue = new FormGroup({
      username:new FormControl(),
      password:new FormControl()
    })
  }
  
  ngOnInit() {
    this.LoginInputValue=this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required]
    })
  }
 
  get v(){
    return this.LoginInputValue.controls;
  }

  register(){
    this.router.navigate(['./signuppage'])
  }
 
  SubmitForm(){
  
    if(this.v.username.valid && this.v.password.valid){
     this.router.navigate(['./welcometorus'])
    }

  }
  
  
}



