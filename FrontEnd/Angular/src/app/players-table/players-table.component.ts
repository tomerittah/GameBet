import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  private players: Player[];
  private sortType = 'position'; // set the default sort type
  private sortReverse = false;  // set the default sort order

  constructor(private playerS: PlayerService) { }

  ngOnInit() {
    this.playerS.getPlayers().then(players => this.players = players);
  }
}
