import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  private games: Game[];

  constructor(private gService: GameService) { }

  public getGames(): void {
    this.gService.getGames().then(games => this.games = games);
    //    this.games = this.gService.getGames();
  }

  ngOnInit() {
    this.getGames();
  }
}
