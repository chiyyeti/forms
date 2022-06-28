import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.css']
})
export class NestedformComponent implements OnInit {

  trigger:boolean = false;

  // userForm : FormGroup;

  userForm = new FormGroup({
    user : new FormControl(''),
    password : new FormControl(''),
    email : new FormControl(''),
            address : new FormGroup({

            local : new FormControl(''),
            state : new FormControl('')

            }),
            mobiles: this.fb.array([
              this.fb.control('')
            ])

  });

 

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.userForm = this.fb.group({
    //   user :[''],
    //   password :['']

    // })


    
  }

  user(){
    this.userForm.get('user')
  }

  password(){
    this.userForm.get('password')
  }




  reg(){
    console.log(this.userForm.value);
    // console.log(this.userForm.get(['address','local']).value);
    console.log(this.userForm.get('address').get('local').value );    // gives local input value
  
  }

  addAddress(){
    this.trigger =! this.trigger;

    /* this.userForm.patchValue({
      user :'sunny',
      address: {                  
        local : 'vdmp'
      }
    }); */
  }

  get mobiles(){
    return this.userForm.get('mobiles') as FormArray

  }

  addMobile(){

    this.mobiles.push(this.fb.control(''))
  }

}
