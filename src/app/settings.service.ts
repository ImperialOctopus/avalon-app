import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor() { }

  playerNumber = 5;

  setPlayerNumber(n: number): void {
    this.playerNumber = n;
  }
  getPlayerNumber(): number {
    return this.playerNumber;
  }

}
