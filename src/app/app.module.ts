import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroModule } from './modules/intro/intro.module';
import { MainModule } from './modules/main/main.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntroModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
