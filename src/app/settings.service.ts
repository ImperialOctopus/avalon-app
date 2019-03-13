import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { get, set } from 'idb-keyval';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor() { }

  private _playerNumber: number;
  private _mute: boolean;
  private _announcer: string;
  private _verbose: boolean;
  private _flair: boolean;
  private _characters: object;

  get playerNumber(): number {
    return this._playerNumber;
  }
  set playerNumber(n: number) {
    this._playerNumber = n;
  }
  get mute(): boolean {
    return this._mute;
  }
  set mute(b: boolean) {
    this._mute = b;
  }
  get announcer(): string {
    return this._announcer;
  }
  set announcer(s: string) {
    this._announcer = s;
  }
  get verbose(): boolean {
    return this._verbose;
  }
  set verbose(b: boolean) {
    this._verbose = b;
  }
  get flair(): boolean {
    return this._flair;
  }
  set flair(b: boolean) {
    this._flair = b;
  }
  get characters() {
    return this._characters;
  }
  set characters(o: object) {
    this._characters = o;
  }

  get data() {
    return async () => {
      await get('hello');
    };
  }

  loadSettings(): Promise<void> {
    return Promise.all([
      get('playerNumber').then((d: number) => this.playerNumber = d),
      get('mute').then((d: boolean) => this.mute = d),
      get('announcer').then((d: string) => this.announcer = d),
      get('verbose').then((d: boolean) => this.verbose = d),
      get('flair').then((d: boolean) => this.flair = d),
      get('characters').then((d: object) => this.characters = d)]).then(() => {
        console.log(this.playerNumber);
        console.log(this.playerNumber === undefined);
        if (this.playerNumber === undefined) { this.playerNumber = 5; }
        if (this.mute === undefined) { this.mute = true; }
        if (this.announcer === undefined) { this.announcer = 'en-gb-C'; }
        if (this.verbose === undefined) { this.verbose = true; }
        if (this.flair === undefined) { this.flair = false; }
        if (this.characters === undefined) {
          this.characters = {
            mordred: false,
            oberon: false,
            morgana: false
          };
        }
        this.saveSettings();
      });
  }

  saveSettings(): void {
    set('playerNumber', this.playerNumber);
    set('mute', this.mute);
    set('announcer', this.announcer);
    set('verbose', this.verbose);
    set('flair', this.flair);
    set('characters', this.characters);
  }
}
