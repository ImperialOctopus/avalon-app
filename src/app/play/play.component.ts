import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Router } from '@angular/router';
import { Howl, Howler } from 'howler';

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

    const sound = new Howl({
      src: [
        '/assets/audio/en-US_f.ogg',
        '/assets/audio/en-US_f.m4a',
        '/assets/audio/en-US_f.mp3',
        '/assets/audio/en-US_f.ac3'
      ],
      sprite: {
        'and-extend-your': [
          0,
          2976.0090702947846
        ],
        'and-look-around': [
          4000,
          3408.0045351473923
        ],
        'and-see-the-agen': [
          9000,
          1800.0000000000007
        ],
        'and-shut-up': [
          12000,
          960.0000000000009
        ],
        'close-your-eyes': [
          14000,
          1320.0000000000002
        ],
        everyone: [
          17000,
          912.01814058957
        ],
        'except-mordred': [
          19000,
          1272.0181405895694
        ],
        'except-oberon': [
          22000,
          1296.009070294783
        ],
        'eyes-closed': [
          25000,
          1199.9999999999993
        ],
        'merlin-and-morga': [
          28000,
          1440.0000000000014
        ],
        merlin: [
          31000,
          768.0045351473907
        ],
        'minions-of-mordr': [
          33000,
          1392.0181405895705
        ],
        'open-your-eyes': [
          36000,
          1272.018140589566
        ],
        percival: [
          39000,
          864.0136054421746
        ],
        'put-your-thumbs': [
          41000,
          1320.0000000000002
        ],
        'so-that-merlin-w': [
          44000,
          1992.0181405895719
        ],
        'so-that-percival': [
          47000,
          2064.0136054421773
        ],
        'so-you-may-know': [
          51000,
          2232.018140589567
        ],
        'stick-up-your-th': [
          55000,
          1416.0090702947841
        ],
        'thumbs-down': [
          58000,
          1056.0090702947846
        ]
      }
    });

    sound.play('merlin');
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
