import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { MainComponent } from './main.component';
import { GameControllersComponent } from './game-controllers/game-controllers.component';

/* --> : Outdoor Libraries : <--- */
import { TetrisCoreModule } from 'ngx-tetris';

@NgModule({
  declarations: [GameComponent, MainComponent, GameControllersComponent],
  imports: [
    CommonModule,
    TetrisCoreModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
