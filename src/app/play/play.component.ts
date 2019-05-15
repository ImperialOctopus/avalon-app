import { SoundElement } from '../sound-element';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';
import { Howl } from 'howler';
import { en_gb_C } from '../announcer-voices/en-gb-C';
import { en_gb_D } from '../announcer-voices/en-gb-D';
import { Announcer } from '../announcer';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  _mute: boolean;
  _pause: boolean;
  _announcer: string;
  _announcerObject: Announcer;

  _cardImage: string;
  _cardText: string;

  sound: Howl;
  soundList: Array<SoundElement>;

  constructor(
    private router: Router,
    private settings: SettingsService,
    private scriptService: ScriptService
  ) { }

  ngOnInit() {
    this.settingsService.loadSettings().then(() => {
      this._mute = this.settingsService.mute;
      this._pause = false;
      this._announcer = this.settingsService.announcer;

      if (this._announcer === 'en-gb-D') { // Synth Male
        this._announcerObject = en_gb_D;
      } else { // Synth Female default
        this._announcerObject = en_gb_C;
      }

      this.sound = new Howl({
        src: this._announcerObject.files,
        sprite: this._announcerObject.spritelist
      });
      this.soundList = this.scriptService.loadScript(this.settingsService.verbose,
        this.settingsService.flair,
        this.settingsService.characters['oberon'],
        this.settingsService.characters['mordred'],
        this.settingsService.characters['morgana']);
      this.sound.mute(this._mute);
      this.sound.on('end', () => { this.playNext(); });
      this.playNext();
    });
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
    this.sound.unload();
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
