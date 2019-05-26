import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  @Input() 
    name = '';
  @Input() 
    surname = '';
  @Output() 
    submit = new EventEmitter();
    
  constructor() { }

  submitForm(){
    this.submit.emit({
      name: this.name,
      surname: this.surname
    })
  }

  ngOnInit() {
  }

}
