import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder,FormControl } from '@angular/forms';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.page.html',
  styleUrls: ['./signuppage.page.scss'],
})
export class SignuppagePage implements OnInit {
  LoginInputValue: FormGroup;
 user:any={};
  constructor(private router:Router, private fb:FormBuilder) {
    this.LoginInputValue=new FormGroup({
      fname:new FormControl(),
      lastname:new FormControl(),
      username:new FormControl(),
      password:new FormControl(),
      confirmpassword:new FormControl(),
   });
  }

  already(){
     this.router.navigate(["./home"])
  }
  Signup(){
     this.user=Object.assign(this.user,this.LoginInputValue.value)
   this.MultiUser(this.user)
    this.router.navigate(["./home"])
    
  }
  MultiUser(user){
   let Array=[]
    if(localStorage.getItem("Users")){
      Array=JSON.parse(localStorage.getItem("Users"))
      Array=[user,...Array]
    localStorage.setItem("Users",JSON.stringify(Array))

    }else{
      Array=[user]
    }

  }


 ngOnInit() {
  this.LoginInputValue=this.fb.group({
    fname:["",Validators.required],
    lastname:["",Validators.required],
    username:["",Validators.required],
    password:["",Validators.required],
    confirmpassword:["",Validators.required]
  });
}
  get v(){
    return this.LoginInputValue.controls;
  }
  
  
  }
