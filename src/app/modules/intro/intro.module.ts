import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { PlayerFormComponent } from '../components/player-form/player-form.component';

@NgModule({
  declarations: [PlayerFormComponent, IntroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    IntroComponent
  ]
})
export class IntroModule { }
