import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  name = '';
  surname = '';
  constructor() { }

  validate(ev){
    console.log(this.name, this.surname);
  }

  ngOnInit() {
  }

}
