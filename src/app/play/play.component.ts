import { SoundElement } from '../sound-element';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';
import { Howl } from 'howler';
import { Announcer } from '../announcer';
import { ScriptService } from '../script.service';

import { en_gb_C } from '../announcer-voices/en-gb-C';
import { en_gb_D } from '../announcer-voices/en-gb-D';
import { cathy } from '../announcer-voices/cathy';

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
    public settings: SettingsService,
    private scriptService: ScriptService
  ) { }

  ngOnInit() {
    this.settings.initialise().then(() => {
      switch (this.settings.announcer) {
        case 'en-gb-D': {
          this.announcerObject = en_gb_D;
          break;
        }
        case 'en-gb-C': {
          this.announcerObject = en_gb_C;
          break;
        }
        case 'cathy': {
          this.announcerObject = cathy;
          break;
        }
      }

      this.sound = new Howl({
        src: this.announcerObject.files,
        sprite: this.announcerObject.spritelist
      });
      this.soundList = this.scriptService.loadScript();
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
  muteButton() {
    this.settings.mute = !this.settings.mute;
    this.sound.mute(this.settings.mute);
    this.settings.saveSettings();
  }
}
