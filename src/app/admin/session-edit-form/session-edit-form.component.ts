import { Component, OnInit } from '@angular/core';
import {Session} from '../session';
import {SessionItemServiceService} from '../session-item-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-session-edit-form',
  providers: [SessionItemServiceService],
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  id;
  session;
  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];
  private sub: any;
  constructor(private route: ActivatedRoute, private service: SessionItemServiceService){}
  onSubmit(sessionItem) {
    console.log(sessionItem);
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    console.log('Session ID' + this.id.toString());
    this.session = this.service.getSession(this.id);
  }

}
