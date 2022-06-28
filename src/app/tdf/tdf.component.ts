import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  user:string = '';

  constructor() { }

  ngOnInit(): void {
  }

customer(value:NgForm){
  console.log(value);
  

}


}
