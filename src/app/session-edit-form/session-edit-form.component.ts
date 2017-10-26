import { Component, OnInit } from '@angular/core';
import {Session} from '../session';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];
  session = new Session(1, 'Web', this.tracks[0], new Date('2017-05-10'), 4, 'ENSIT', 0);
  constructor() { }

  ngOnInit() {
  }
  onSubmit(sessionItem) {
    console.log(sessionItem);
  }

}
