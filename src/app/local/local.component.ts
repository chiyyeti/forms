import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
data:any
  constructor() { }

  ngOnInit(): void {
    this.data=localStorage.getItem("Data")
  }

  onClick(){
 this.data="This is storing data to Local Storage";
 localStorage.setItem("Data",this.data)
  }
  remove(){
localStorage.removeItem("Data")
  }

}
