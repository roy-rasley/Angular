import { Component } from '@angular/core';

@Component({
  selector: 'roy-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';
  firstName = 'Roy';
  lastName = 'Rasley';
  fontSizePx = 16;

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
