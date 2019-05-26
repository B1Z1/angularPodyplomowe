import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { PlayerFormComponent } from '../../components/player-form/player-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlayerFormComponent, IntroComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IntroComponent
  ]
})
export class IntroModule { }
