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
    // Project member add button
    $(document).ready(function() {
      var projects_div = $("#project_members_div");
      var add_member_button = $(".add_project_member");

      $(add_member_button).click(function(e) {
        e.preventDefault();
        $(projects_div).append('<div><input style="padding: 3px; border: 2px solid black; margin-top: 5px; width: 40%;" id="project_member" type="text" name="project_member"/><a href="#" class="delete" style="color: black; text-decoration: none; list-style: none; margin-left: 15px; font-size: calc(0.5rem + 0.8vw);">Delete</a></div>');
      });

      $(projects_div).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent("div").remove();
      });
    });

    // divs hide and show on button click in home container
    $(document).ready(function() {
      $("#project_add_button").click(function() {
        $(".home > div:not(.project_add").hide("fast");
        $(".project_add").show("slow");
      });

      $("#bug_add_button").click(function() {
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
