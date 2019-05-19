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

  startGame(){
    this.gameStarted = !this.gameStarted;
  }

  getText(){
    return !this.gameStarted ? 'Zacznij grę':'Skończ grę';
  }

}
