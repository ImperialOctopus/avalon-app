import { SoundElement } from '../sound-element';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';
import { Howl, Howler } from 'howler';
import { en_US_f } from '../announcer-voices/en-US-f';
import { Announcer } from '../announcer';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  _characters: object = {
    percival: false,
    mordred: false,
    oberon: false,
    morgana: false
  };
  _mute: boolean;
  _pause: boolean;

  _cardImage: string;
  _cardText: string;

  sound: Howl;
  soundList: Array<SoundElement>;

  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    // this.settingsService.loadSettings(); Uncomment when loadSettings is implemented
    this._characters = this.settingsService.characters;
    this._mute = this.settingsService.mute;
    this._pause = false;

    this.sound = new Howl({
      src: en_US_f.files,
      sprite: en_US_f.spritelist
    });
    this.sound.on('end', () => { this.playNext(); });
    this.playNext();
  }

  playNext() {
    if (this.soundList.length > 0) {
      const element: SoundElement = this.soundList.shift();
      this._cardImage = element.image;
      this._cardText = element.title;
      this.sound.play(element.sound);
    }
  }

  stopButton() {
    this.router.navigate(['/']);
  }
  pauseButton() {
    this._pause = !this._pause;
  }
  muteButton() {
    this._mute = !this._mute;
    this.settingsService.mute = this._mute;
    this.settingsService.saveSettings();
  }
}
