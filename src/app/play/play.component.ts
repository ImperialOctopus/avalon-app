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
    this.soundList = en_US_f.loadScript(this.settingsService.announcerSettings());
    this.sound.mute(this._mute);
    this.sound.on('end', () => { this.playNext(); });
    this.playNext();
  }

  playNext() {
    if (this.soundList.length > 0) {
      const element: SoundElement = this.soundList.shift();
      this._cardImage = element.image;
      this._cardText = element.title;
      this.sound.play(element.sound);
    } else {
      this.stop();
    }
  }

  stop() {
    this.sound.stop();
    this.router.navigate(['/']);
  }
  pause() {
    this._pause = !this._pause;
    if (this._pause) {
      this.sound.pause();
    } else {
      this.sound.play();
    }
  }
  mute() {
    this._mute = !this._mute;
    this.settingsService.mute = this._mute;
    this.settingsService.saveSettings();
    this.sound.mute(this._mute);
  }
}
