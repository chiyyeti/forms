import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

user:string;
email:string ;
password:string ;
cpassword:string;
contact:number;
address:string;
city:string;
gender:boolean;
date:string;
terms:boolean;
file:boolean;



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }





  login(loginForm : NgForm){
    console.log(loginForm.value);
  }

  setValue(loginForm:NgForm){
    
    // set Form values

    let Details ={
      user:'gana',
      email:'gana@gmail.com',
      password:'123456',
      cpassword:'123456',
      contact:8978274486,
      address:'khjbuhgytfyt',
      city:'Bangalore',
      gender:"male",
      terms:true,
      date: new Date().toLocaleString(),
      file:""

    }



   
   
    loginForm.setValue(Details)
  }

}
