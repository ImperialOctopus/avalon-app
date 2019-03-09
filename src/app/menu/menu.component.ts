import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PlayerDialogComponent } from '../player-dialog/player-dialog.component';
import { SettingsService } from '../settings.service';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  evil: object = {
    5: 2,
    6: 2,
    7: 3,
    8: 3,
    9: 3,
    10: 4
  };
  characters: object = {
    percival: false,
    mordred: false,
    oberon: false,
    morgana: false
  };

  _playerNumber: number;
  _servantNumber: number;
  _minionNumber: number;
  _mute: boolean;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settingsService.loadSettings();
    this._mute = this.settingsService.mute;
    this.update();
  }

  play() {
    this.router.navigate(['/play']);
  }

  toggleCharacter(char) {
    // Genuinely disgusting: please fix
    if (char === 'percival') {
      this.characters['percival'] = !this.characters['percival'];
    } else { // Evil characters
      if (this.characters[char]) { // Disabling
        this.characters[char] = false;
      } else if (this._minionNumber > 0) { // Safe to enable
        this.characters[char] = true;
      } else { // Must disable a character
        if (char === 'morgana') {
          if (this.characters['oberon']) {
            this.characters['oberon'] = false;
            this.characters['morgana'] = true;
          } else if (this.characters['mordred']) {
            this.characters['mordred'] = false;
            this.characters['morgana'] = true;
          }
        } else if (char === 'mordred') {
          if (this.characters['oberon']) {
            this.characters['oberon'] = false;
            this.characters['mordred'] = true;
          } else if (this.characters['morgana']) {
            this.characters['morgana'] = false;
            this.characters['mordred'] = true;
          }
        } else {
          if (this.characters['mordred']) {
            this.characters['mordred'] = false;
            this.characters['oberon'] = true;
          } else if (this.characters['morgana']) {
            this.characters['morgana'] = false;
            this.characters['oberon'] = true;
          }
        }
      }
    }
    this.update();
  }

  update() {
    this._playerNumber = this.settingsService.playerNumber;
    this.autoDisableEvil();
    this._minionNumber =
      this.evil[this._playerNumber] -
      this.getEvilNumber();
    this._servantNumber =
      (this._playerNumber - this.evil[this._playerNumber]) -
      this.getGoodNumber();
  }

  getEvilNumber(): number {
    const evil = (~~this.characters['mordred'] + ~~this.characters['morgana'] + ~~this.characters['oberon'] + 1);
    return evil;
  }
  getGoodNumber(): number {
    const good = (~~this.characters['percival'] + 1);
    return good;
  }
  autoDisableEvil() {
    if (this.evil[this._playerNumber] - this.getEvilNumber() < 0) {
      this.characters['oberon'] = false;
    }
    if (this.evil[this._playerNumber] - this.getEvilNumber() < 0) {
      this.characters['mordred'] = false;
    }
    if (this.evil[this._playerNumber] - this.getEvilNumber() < 0) {
      this.characters['morgana'] = false;
    }
  }

  openPlayerDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(PlayerDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.update();
      // Player menu closed
    });
  }
  openSettingsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(SettingsDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      // Settings menu closed
    });
  }
  muteButton() {
    this._mute = !this._mute;
    this.settingsService.mute = this._mute;
  }
}
