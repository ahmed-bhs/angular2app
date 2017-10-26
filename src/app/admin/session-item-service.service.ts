import { Injectable } from '@angular/core';
import {SESSIONITEMS} from './sessions';
import {Http} from '@angular/http';
import * as http from 'http';
// import {Http, HttpModule} from '@angular/http';
// import 'rxjs/add/operator/map';
// import * as http from 'http';

@Injectable()
export class SessionItemServiceService {

  constructor(private http: Http) { }
  get() { return http.get('http://localhost/mean.json').map(res => res.json()); }
  add(sessionItem) {
    sessionItem.id = SESSIONITEMS.length + 1;
    SESSIONITEMS.push(sessionItem);
  }
  delete(sessionItem) {
    let index;
    index = SESSIONITEMS.indexOf(sessionItem);
    if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
      SESSIONITEMS.splice(index, 1);
    }
  }

  getSession(id: number) {
    return SESSIONITEMS[id - 1];
  }
}
