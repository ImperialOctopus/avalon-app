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

  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    // this.settingsService.loadSettings(); Uncomment when loadSettings is implemented
    this._characters = this.settingsService.characters;
    this._mute = this.settingsService.mute;
    console.log(this._characters);
  }

  stop() {
    console.log('stop');
  }
  pause() {
    console.log('pause');
  }
}
