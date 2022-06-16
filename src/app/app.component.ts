import { Component } from '@angular/core';

@Component({
  selector: 'roy-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';
  firstName:string = 'Roy';
  lastName:string = 'Rasley';
  fontSizePx = 16;
  date: Date = new Date();
  time: Date = new Date();
  

  constructor(){
    this.firstName
    this.lastName
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

}
