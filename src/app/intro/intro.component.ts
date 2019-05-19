import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input() userName = '';
  @Input() title = 'NO TITLE';
  constructor() { }

  ngOnInit() {
  }

}
