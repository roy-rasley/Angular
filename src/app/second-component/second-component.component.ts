import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
appComponent = new AppComponent;
lastName = this.appComponent.lastName;
  constructor() { }

  ngOnInit(): void {
  }

}
