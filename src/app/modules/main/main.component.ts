import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input()
    userName = '';
  @Input()
    userSurname = '';

  @Output() 
    endGameApp = new EventEmitter();

  endGame(){
    this.endGameApp.emit();
  }

  ngOnInit() {
  }

}
