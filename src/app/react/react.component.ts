import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  // empForm :FormGroup;
  // data;

  regForm = this.fb.group({
    user : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.maxLength(25)]),
    email : new FormControl('',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'),Validators.maxLength(25)]),
    password : new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}')]),
    cpassword : new FormControl('',[Validators.required])
  },{
      validators:this.cpasswordMatch('password', 'cpassword')
  })


ngOnInit(): void {

  /*
  this.empForm =this.fb.group({
     email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(" /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z2-3-]+)*$/")]),
     password: new FormControl('',[Validators.required,Validators.pattern(" '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'")])
  // At least 8 characters in length,Lowercase letters,Uppercase letters,Numbers Special characters
   })
}  */



  /*
By using setValue method we can set the form field values .
disadvantage in setValue we have set values to all form fields.


this.regForm.setValue({
  user: "sunny",
  email : "sunny@gmail.com",
  password : "Abc@12345",
  cpassword :"Abc@12345"

}) */


/*

By using patchValue we can set any  the form field value.no need to fill all the form fields

this.regForm.patchValue({
  user :"Sunny",
  email : "Sunny@gmail.com"

})
*/








}

cpasswordMatch(controlName:string , matchingControlName:string){
  return (formGroup:FormGroup)=>{
    // console.log(controlName,matchingControlName);
    
    const control= formGroup.controls[controlName];
    const matchingControl =formGroup.controls[matchingControlName];

// set error on matchingControl if validation fails
    if(control.value !== matchingControl.value){
      matchingControl.setErrors({ cpasswordMatch:true });
    }else{
      matchingControl.setErrors(null);
    }


  }

}

 constructor(private fb:FormBuilder){

 }


// onSubmit(){


// }


//   onEdit(data :any){
// this.empForm.controls['email'].setValue(data.email)
//   }

register(){
  console.log(this.regForm.value);
  
}


get user(){
  return this.regForm.get('user');  // it help us to show the error msg
}

get email(){
  return this.regForm.get('email')
}

get password(){
  return this.regForm.get('password')
}

get cpassword(){
  return this.regForm.get('cpassword')
}

}
