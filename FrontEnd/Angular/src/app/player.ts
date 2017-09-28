import { Game } from './game';

export class Player {
  constructor(
    private id: number,
    private name: string,
    private score: number,
    private position: number,
    private games: Game[]) { }
}
