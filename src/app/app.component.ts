import {Component, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule],
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // title = 'app';
  // session_name= 'Formation Web Avancé';
  firstSession = {
    id: 1,
    name: 'Formation Web Avancé',
    track: 'MEAN Stack',
    date: new Date ('10/10/2017'),
    duree: 9,
    local: 'ENSIT',
    participants: 0
  };
}

