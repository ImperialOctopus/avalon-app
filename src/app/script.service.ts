import { Injectable } from '@angular/core';
import { SoundElement } from './sound-element';
import { Character } from './character';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor(private settings: SettingsService) { }

  loadScript(): Array<SoundElement> {
    const verbose = this.settings.verbose;
    const flair = this.settings.flair;
    const characters = this.settings.characters;
    const array: Array<SoundElement> = new Array<SoundElement>();

    array.push(new SoundElement('everyone', 'Everyone', 'assets/characters/loyal-servant.png'));
    array.push(new SoundElement('close-your-eyes', 'Close your eyes', 'assets/characters/loyal-servant.png'));
    if (verbose) {
      array.push(new SoundElement('and-extend-your', 'And extend your fist', 'assets/characters/loyal-servant.png'));
    }
    if (flair) {
      array.push(new SoundElement('and-shut-up', 'And shut up!', 'assets/characters/loyal-servant.png'));
    }
    array.push(new SoundElement('silence', '', 'assets/characters/loyal-servant.png'));
    array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', 'assets/characters/minion.png'));
    if (characters[Character.Oberon]) {
      array.push(new SoundElement('except-oberon', 'Except Oberon', 'assets/characters/oberon.png'));
    }
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', 'assets/characters/minion.png'));
    if (verbose) {
      array.push(new SoundElement('and-look-around', 'And look around...', 'assets/characters/minion.png'));
      array.push(new SoundElement('silence', '', 'assets/characters/minion.png'));
      array.push(new SoundElement('silence', '', 'assets/characters/minion.png'));
      array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', 'assets/characters/minion.png'));
      array.push(new SoundElement('close-your-eyes', 'Close your eyes', 'assets/characters/minion.png'));
    } else {
      array.push(new SoundElement('silence', '', 'assets/characters/minion.png'));
      array.push(new SoundElement('silence', '', 'assets/characters/minion.png'));
      array.push(new SoundElement('eyes-closed', 'Eyes closed', 'assets/characters/minion.png'));
    }
    array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', 'assets/characters/minion.png'));
    if (characters[Character.Mordred]) {
      array.push(new SoundElement('except-mordred', 'Except Mordred', 'assets/characters/mordred.png'));
    }
    array.push(new SoundElement('stick-up-your-th', 'Stick up your thumbs', 'assets/characters/minion.png'));
    if (verbose) {
      array.push(new SoundElement('so-that-merlin-w', 'So that Merlin will know of you', 'assets/characters/merlin.png'));
    }
    array.push(new SoundElement('silence', '', 'assets/characters/minion.png'));
    array.push(new SoundElement('merlin', 'Merlin', 'assets/characters/merlin.png'));
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', 'assets/characters/merlin.png'));
    if (verbose) {
      array.push(new SoundElement('and-see-the-agen', 'And see the agents of evil', 'assets/characters/merlin.png'));
      array.push(new SoundElement('silence', '', 'assets/characters/merlin.png'));
      array.push(new SoundElement('silence', '', 'assets/characters/merlin.png'));
      array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', 'assets/characters/minion.png'));
      array.push(new SoundElement('put-your-thumbs', 'Put your thumbs away', 'assets/characters/minion.png'));
      array.push(new SoundElement('merlin', 'Merlin', 'assets/characters/merlin.png'));
      array.push(new SoundElement('close-your-eyes', 'Close your eyes', 'assets/characters/merlin.png'));
    } else {
      array.push(new SoundElement('silence', '', 'assets/characters/merlin.png'));
      array.push(new SoundElement('silence', '', 'assets/characters/merlin.png'));
      array.push(new SoundElement('thumbs-down', 'Thumbs down, eyes closed', 'assets/characters/merlin.png'));
      array.push(new SoundElement('eyes-closed', 'Thumbs down, eyes closed', 'assets/characters/merlin.png'));
    }
    if (characters[Character.Morgana]) {
      array.push(new SoundElement('merlin-and-morga', 'Merlin and Morgana', 'assets/characters/morgana.png'));
      array.push(new SoundElement('stick-up-your-th', 'Stick up your thumbs', 'assets/characters/morgana.png'));
      if (verbose) {
        array.push(new SoundElement('so-that-percival', 'So that Percival may know of you', 'assets/characters/percival.png'));
      }
      array.push(new SoundElement('silence', '', 'assets/characters/morgana.png'));
      array.push(new SoundElement('percival', 'Percival', 'assets/characters/percival.png'));
      array.push(new SoundElement('open-your-eyes', 'Open your eyes', 'assets/characters/percival.png'));
      if (verbose) {
        array.push(new SoundElement('so-you-may-know', 'So you may know Merlin and Morgana', 'assets/characters/percival.png'));
        array.push(new SoundElement('silence', '', 'assets/characters/percival.png'));
        array.push(new SoundElement('silence', '', 'assets/characters/percival.png'));
        array.push(new SoundElement('merlin-and-morga', 'Merlin and Morgana', 'assets/characters/morgana.png'));
        array.push(new SoundElement('put-your-thumbs', 'Put your thumbs away', 'assets/characters/morgana.png'));
        array.push(new SoundElement('percival', 'Percival', 'assets/characters/percival.png'));
        array.push(new SoundElement('close-your-eyes', 'Close your eyes', 'assets/characters/percival.png'));
      } else {
        array.push(new SoundElement('silence', '', 'assets/characters/percival.png'));
        array.push(new SoundElement('silence', '', 'assets/characters/percival.png'));
        array.push(new SoundElement('thumbs-down', 'Thumbs down, eyes closed', 'assets/characters/percival.png'));
        array.push(new SoundElement('eyes-closed', 'Thumbs down, eyes closed', 'assets/characters/percival.png'));
      }
    }
    array.push(new SoundElement('everyone', 'Everyone', 'assets/characters/loyal-servant.png'));
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', 'assets/characters/loyal-servant.png'));

    return array;
  }
}
