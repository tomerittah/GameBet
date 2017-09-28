import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';

import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
