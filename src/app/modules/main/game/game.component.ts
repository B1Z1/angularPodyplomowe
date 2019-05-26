import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor() { }

  submit(){
    this.close.emit();
  }

  ngOnInit() {
  }

}
