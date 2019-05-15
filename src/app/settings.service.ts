import { Injectable } from '@angular/core';
import { get, set } from 'idb-keyval';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor() { }

  playerNumber: number;
  mute: boolean;
  announcer: string;
  verbose: boolean;
  flair: boolean;
  characters: object;

  async initialise(): Promise<void> {
    await Promise.all([
      this.playerNumber = await get('playerNumber'),
      this.mute = await get('mute'),
      this.announcer = await get('announcer'),
      this.verbose = await get('verbose'),
      this.flair = await get('flair'),
      this.characters = await get('characters')
    ]);

    if (this.playerNumber === undefined) {
      this.playerNumber = 5;
    }
    if (this.mute === undefined) {
      this.mute = true;
    }
    if (this.announcer === undefined) {
      this.announcer = 'en-gb-C';
    }
    if (this.verbose === undefined) {
      this.verbose = true;
    }
    if (this.flair === undefined) {
      this.flair = false;
    }
    if (this.characters === undefined) {
      this.characters = [];
      this.characters[Character.Percival] = false;
      this.characters[Character.Morgana] = false;
      this.characters[Character.Mordred] = false;
      this.characters[Character.Oberon] = false;
    }
    this.saveSettings();
  }

  saveSettings(): Promise<any> {
    return Promise.all([
      set('playerNumber', this.playerNumber),
      set('mute', this.mute),
      set('announcer', this.announcer),
      set('verbose', this.verbose),
      set('flair', this.flair),
      set('characters', this.characters)]);
  }
}
