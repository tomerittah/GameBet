import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';
import { Route, RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';

import { GameService } from './game.service';
import { PlayerService } from './player.service';
import { PlayersTableComponent } from './players-table/players-table.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';

const ROUTES: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AppLoginComponent },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'personal', component: PersonalAreaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GamesComponent,
    PlayersTableComponent,
    PlayerDetailComponent,
    MainDashboardComponent,
    AppLoginComponent,
    PersonalAreaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    OrderModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    GameService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
