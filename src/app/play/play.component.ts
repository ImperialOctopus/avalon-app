import { SoundElement } from '../sound-element';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';
import { Howl, Howler } from 'howler';
import { en_gb_C } from '../announcer-voices/en-gb-C';
import { Announcer } from '../announcer';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

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
    this._mute = this.settingsService.mute;
    this._pause = false;

    this.sound = new Howl({
      src: en_gb_C.files,
      sprite: en_gb_C.spritelist
    });
    this.soundList = en_gb_C.loadScript(this.settingsService.verbose,
      this.settingsService.flair,
      this.settingsService.characters['percival'],
      this.settingsService.characters['oberon'],
      this.settingsService.characters['mordred'],
      this.settingsService.characters['morgana']);
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
