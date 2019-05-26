import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Tetrisss';
  gameStarted = false;

  /* ---> :Player Data: <---*/
  userName = '';
  userSurname = '';

  constructor(){
    this.startGame({
      name: 'Illya',
      surname: 'Mishkin'
    })
  }

  startGame(data){
    this.userName = data.name;
    this.userSurname = data.surname;
    this.gameStarted = true;
  }

  endGame(){
    this.gameStarted = false;
  }

}
