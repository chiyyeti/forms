import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-online',
  templateUrl: './react-online.component.html',
  styleUrls: ['./react-online.component.css']
})
export class ReactOnlineComponent implements OnInit {

  userForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void { 
    this.userForm = this.fb.group({
      txtName: ['', Validators.required],
      txtEmail: ['', [Validators.required, Validators.email]],
      txtMobile: ['', [Validators.required, Validators.minLength(10)]],
      txtPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get getform() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    alert('SUCCESS' + JSON.stringify(this.userForm.value));
  }
  onReset() {
    this.submitted = false;
    this.userForm.reset();
}

}
