import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-controllers',
  templateUrl: './game-controllers.component.html',
  styleUrls: ['./game-controllers.component.scss']
})
export class GameControllersComponent implements OnInit {
  @Input() game;

  constructor() { 
    console.log(this.game);
  }

  ngOnInit() {
  }

}
