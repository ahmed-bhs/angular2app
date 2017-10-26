import {Component, Input, OnInit} from '@angular/core';
import {SessionItemServiceService} from '../session-item-service.service';

@Component({
  selector: 'app-session-item-list',
  providers: [SessionItemServiceService],
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionItems;
  constructor(private sessionItemService: SessionItemServiceService) {}
/*  sessionItems = [
    {
      id: 1,
      name: 'Web',
      track: 'MEAN Stack',
      date: new Date('2017-10-17'),
      duree: 3,
      local: 'ENSIT',
      participants: 0,
      isCompleted : false
    },
    {
      id: 2,
      name: 'Web',
      track: 'NodeJS',
      date: new Date('2017-10-20'),
      duree: 5,
      local: 'ENSIT',
      participants: 0,
      isCompleted : false
    },
    {
      id: 3,
      name: 'Mobile',
      track: 'Ionic',
      date: new Date('2017-11/01'),
      duree: 2,
      local: 'ENSIT',
      participants: 0,
      isCompleted : false
    }
  ]; */

  ngOnInit() {
    this.sessionItems = this.sessionItemService.get();
  }

}
