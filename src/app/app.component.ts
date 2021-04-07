import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { faBug, faBinoculars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bug-tracker';
  constructor() {}

  //font awesome icons
  faBug = faBug;
  faBinoculars = faBinoculars;

  ngOnInit(): void{
  
  }
}
