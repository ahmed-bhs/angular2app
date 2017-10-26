import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {
  onSubmit(sessionItem) {
    console.log(sessionItem);
  }

  constructor() { }

  ngOnInit() {
  }}
