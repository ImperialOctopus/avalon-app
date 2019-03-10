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
  _characters: object = {
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
    this.loadSettings();
    this.updateServants();
  }

  loadSettings() {
    this._playerNumber = this.settingsService.playerNumber;
    this._mute = this.settingsService.mute;
    this._characters = this.settingsService.characters;
  }
  saveSettings() {
    this.settingsService.playerNumber = this._playerNumber;
    this.settingsService.mute = this._mute;
    this.settingsService.characters = this._characters;
    this.settingsService.saveSettings();
  }

  play() {
    console.log("Play");
    this.router.navigate(['/play']);
  }

  toggleCharacter(char) {
    // Genuinely disgusting: please fix
    if (char === 'percival') {
      this._characters['percival'] = !this._characters['percival'];
    } else { // Evil _characters
      if (this._characters[char]) { // Disabling
        this._characters[char] = false;
      } else if (this._minionNumber > 0) { // Safe to enable
        this._characters[char] = true;
      } else { // Must disable a character
        if (char === 'morgana') {
          if (this._characters['oberon']) {
            this._characters['oberon'] = false;
            this._characters['morgana'] = true;
          } else if (this._characters['mordred']) {
            this._characters['mordred'] = false;
            this._characters['morgana'] = true;
          }
        } else if (char === 'mordred') {
          if (this._characters['oberon']) {
            this._characters['oberon'] = false;
            this._characters['mordred'] = true;
          } else if (this._characters['morgana']) {
            this._characters['morgana'] = false;
            this._characters['mordred'] = true;
          }
        } else {
          if (this._characters['mordred']) {
            this._characters['mordred'] = false;
            this._characters['oberon'] = true;
          } else if (this._characters['morgana']) {
            this._characters['morgana'] = false;
            this._characters['oberon'] = true;
          }
        }
      }
    }
    this.saveSettings();
    this.updateServants();
  }

  updateServants() {
    this.autoDisableEvil();
    this._minionNumber =
      this.evil[this._playerNumber] -
      this.getEvilNumber();
    this._servantNumber =
      (this._playerNumber - this.evil[this._playerNumber]) -
      this.getGoodNumber();
  }

  getEvilNumber(): number {
    const evil = (~~this._characters['mordred'] + ~~this._characters['morgana'] + ~~this._characters['oberon'] + 1);
    return evil;
  }
  getGoodNumber(): number {
    const good = (~~this._characters['percival'] + 1);
    return good;
  }
  autoDisableEvil() {
    if (this.evil[this._playerNumber] - this.getEvilNumber() < 0) {
      this._characters['oberon'] = false;
    }
    if (this.evil[this._playerNumber] - this.getEvilNumber() < 0) {
      this._characters['mordred'] = false;
    }
    if (this.evil[this._playerNumber] - this.getEvilNumber() < 0) {
      this._characters['morgana'] = false;
    }
  }

  openPlayerDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(PlayerDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.loadSettings();
      this.updateServants();
      // Player menu closed
    });
  }
  openSettingsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(SettingsDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.loadSettings();
      // Settings menu closed
    });
  }
  muteButton() {
    this._mute = !this._mute;
    this.saveSettings();
  }
}
