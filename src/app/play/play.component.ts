import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    // this.settingsService.loadSettings(); Uncomment when loadSettings is implemented
    this._characters = this.settingsService.characters;
    this._mute = this.settingsService.mute;
    this._pause = false;
    console.log(this._characters);
  }

  stop() {
    this.router.navigate(['/']);
  }
  pause() {
    this._pause = !this._pause;
  }
}
