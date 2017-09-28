import { Game } from './game';

export class Player {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string,
    private score: number,
    private position: number,
    private games: Game[]) { }
}
