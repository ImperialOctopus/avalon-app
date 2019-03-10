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

  _cardImage: string;
  _cardText: string;

  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    // this.settingsService.loadSettings(); Uncomment when loadSettings is implemented
    this._characters = this.settingsService.characters;
    this._mute = this.settingsService.mute;
    this._pause = false;

    this._cardImage = '/assets/characters/merlin.jpg';
    this._cardText = 'Text sample';
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
