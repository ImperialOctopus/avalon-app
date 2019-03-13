import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

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
  private _tiger: boolean;
  private _characters: object = {
    percival: false,
    mordred: false,
    oberon: false,
    morgana: false
  };

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
  get tiger(): boolean {
    return this._tiger;
  }
  set tiger(b: boolean) {
    this._tiger = b;
  }
  get characters() {
    return this._characters;
  }
  set characters(o: object) {
    this._characters = o;
  }

  loadSettings(): void {
    this.playerNumber = 5;
    this.mute = false;
    this.announcer = 'en-gb-C';
    this.verbose = false;
    this.flair = false;
    this.tiger = true;
    this._characters = {
      percival: true,
      mordred: false,
      oberon: false,
      morgana: false
    };
  }
  saveSettings(): void {
    console.log('Saved');
  }
}
