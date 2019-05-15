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

  paused: boolean;
  announcer: string;
  announcerObject: Announcer;

  cardImage: string;
  cardText: string;

  sound: Howl;
  soundList: Array<SoundElement>;

  constructor(
    private router: Router,
    private settings: SettingsService,
    private scriptService: ScriptService
  ) { }

  ngOnInit() {
    this.settings.initialise().then(() => {
      if (this.settings.announcer === 'en-gb-D') { // Synth Male
        this.announcerObject = en_gb_D;
      } else { // Synth Female default
        this.announcerObject = en_gb_C;
      }

      this.sound = new Howl({
        src: this.announcerObject.files,
        sprite: this.announcerObject.spritelist
      });
      this.soundList = this.scriptService.loadScript(
        this.settings.verbose,
        this.settings.flair,
        this.settings.characters);
      this.sound.mute(this.settings.mute);
      this.sound.on('end', () => { this.playNext(); });
      this.playNext();
    });
  }

  playNext() {
    if (this.soundList.length > 0) {
      const element: SoundElement = this.soundList.shift();
      this.cardImage = element.image;
      this.cardText = element.title;
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
    this.paused = !this.paused;
    if (this.paused) {
      this.sound.pause();
    } else {
      this.sound.play();
    }
  }
  mute() {
    this.settings.mute = !this.settings.mute;
    this.sound.mute(this.settings.mute);
    this.settings.saveSettings();
  }
}
