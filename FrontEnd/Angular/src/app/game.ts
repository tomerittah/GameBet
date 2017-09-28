export class Game {
  constructor(
    private id: number,
    private homeTeamName: string,
    private awayTeamName: string,
    private homeTeamScore: number,
    private awayTeamScore: number,
    private stadium: string,
    private schedule: string) { }
}
