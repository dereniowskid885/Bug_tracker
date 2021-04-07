import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { faBug, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

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
    // divs hide and show on button click in home container
    $(document).ready(function() {
      $("#add_button").click(function() {
        $(".home > div:not(.bug_add").hide("fast");
        $(".bug_add").show("slow");
      });

      $("#list_button").click(function() {
        $(".home > div:not(.bug_list").hide("fast");
        $(".bug_list").show("slow");
      });

      $("#about_button").click(function() {
        $(".home > div:not(.bug_about").hide("fast");
        $(".bug_about").show("slow");
      });
    });
  }
}
