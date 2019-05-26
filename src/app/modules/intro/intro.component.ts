import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input() userSurname = '';
  @Input() userName = '';
  @Input() title = 'NO TITLE';
  @Output() appStartGame = new EventEmitter();

  constructor() { }

  startGame(data){
    this.userName = data.name;
    this.userSurname = data.surname;

    this.appStartGame.emit({
      name: this.userName,
      surname: this.userSurname
    });
  }

  ngOnInit() {
  }

}
