import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session;
  @Output() participantsChange = new EventEmitter<number>();
  // alignment= 'right';
  // couleur= 'red';
   inscrire() {
     console.log('Nouvelle Inscription ..');
     this.session.participants = +this.session.participants + 1;
     console.log(this.session.participants + ' Participants');
     this.participantsChange.emit(this.session.participants);
     if (this.session.participants >= 5) {
       this.session.isCompleted = true;
     }
   }
  constructor() { }

  ngOnInit() {
  }

}
