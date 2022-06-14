import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  appComponent = new AppComponent;
  firstName = this.appComponent.firstName
  constructor() {

   }
   
  ngOnInit(): void {
  }

}
