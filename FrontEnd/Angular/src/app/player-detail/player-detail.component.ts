import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  private player: Player;
  private id: number = 0;

  constructor(private pService: PlayerService) { }

  public getPlayerDetails() {
    this.pService.getPlayer(this.id).then(player => this.player = player);
  }

  ngOnInit() {
    this.getPlayerDetails();
  }
}
