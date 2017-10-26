import {Component, NgModule, OnInit} from '@angular/core';
import {SessionItemServiceService} from '../session-item-service.service';

@Component({
  selector: 'app-session-add-form',
  providers: [SessionItemServiceService],
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {
  constructor(private sessionItemService: SessionItemServiceService) { }
  onSubmit(sessionItem) {
    console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
  }
  ngOnInit() {
  }}
