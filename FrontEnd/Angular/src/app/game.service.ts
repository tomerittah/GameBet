import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Game } from './game';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
  private gamesUrl = 'assets/games.json';  // URL to web api
  // private games: Game[];

  constructor(private httpClient: HttpClient, private http: Http) { }

//   public getGames() {
//     this.httpClient.get<Game[]>(this.gamesUrl).subscribe(data => {
//       this.games = data;
//     });
// }

  public getGames(): Promise<Game[]> {
    return this.http.get(this.gamesUrl)
               .toPromise()
               .then(response => response.json() as Game[]);
  }

  public getGame(id: number): Promise<Game> {
    return this.http.get(this.gamesUrl)
               .toPromise()
               .then(response => response.json()[id] as Game);
  }
}
