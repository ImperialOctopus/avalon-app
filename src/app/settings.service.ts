import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor() { }

  playerNumber: number;
  announcer: number;
  verbose: boolean;
  flair: boolean;
  tiger: boolean;

  loadSettings(): void {
    this.playerNumber = 5;
    this.announcer = 0;
  }

  setPlayerNumber(n: number): void {
    this.playerNumber = n;
  }
  setAnnouncer(n: number): void {
    this.announcer = n;
  }
  setVerbose(b: boolean): void {
    this.verbose = b;
  }
  setFlair(b: boolean): void {
    this.flair = b;
  }
  setTiger(b: boolean): void {
    this.tiger = b;
  }
}
