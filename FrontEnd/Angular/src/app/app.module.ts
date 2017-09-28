import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';

import { GameService } from './game.service';
import { PlayerService } from './player.service';
import { PlayersTableComponent } from './players-table/players-table.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GamesComponent,
    PlayersTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [
    GameService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
