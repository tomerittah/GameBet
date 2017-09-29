import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Player } from './player';

@Injectable()
export class PlayerService {
  private playersUrl = 'assets/players.json';

  constructor(private http: Http) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.playersUrl)
               .toPromise()
               .then(response => response.json() as Player[]);
  }

  getPlayer(id: number): Promise<Player> {
    return this.http.get(this.playersUrl)
               .toPromise()
               .then(response => response.json()[id] as Player);
  }
}
