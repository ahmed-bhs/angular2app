import { Component, OnInit } from '@angular/core';
import {SessionItemServiceService} from '../session-item-service.service';

@Component({
  selector: 'app-admin',
  providers: [SessionItemServiceService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
