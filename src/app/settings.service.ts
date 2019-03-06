import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor() { }

  playerNumber: number;

  setPlayerNumber(n: number): void {
    this.playerNumber = n;
  }
  getPlayerNumber(): number {
    return this.playerNumber;
  }

}
