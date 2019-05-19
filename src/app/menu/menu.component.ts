import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PlayerDialogComponent } from '../player-dialog/player-dialog.component';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { SettingsService } from '../settings.service';
import { Character } from '../character';

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

  character = Character;
  minions: number;
  servants: number;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private settings: SettingsService
  ) { }

  ngOnInit() {
    this.settings.initialise().then(() => {
      this.updateServants();
    });
  }

  play() {
    this.router.navigate(['/play']);
  }

  toggleCharacter(char: Character) {
    this.settings.characters[char] = !this.settings.characters[char];
    while (this.evilCharacters() > this.evil[this.settings.playerNumber]) {
      if (this.settings.characters[Character.Oberon] && char !== Character.Oberon) {
        this.settings.characters[Character.Oberon] = false;
      } else if (this.settings.characters[Character.Mordred] && char !== Character.Mordred) {
        this.settings.characters[Character.Mordred] = false;
      } else if (this.settings.characters[Character.Morgana] && char !== Character.Morgana) {
        this.settings.characters[Character.Morgana] = false;
      }
    }
    this.updateServants();
  }

  evilCharacters(): number {
    return Number(this.settings.characters[Character.Morgana]) +
      Number(this.settings.characters[Character.Mordred]) +
      Number(this.settings.characters[Character.Oberon]) + 1;
  }

  updateServants() {
    this.minions = this.evil[this.settings.playerNumber] - this.evilCharacters();
    this.servants = this.settings.playerNumber
      - this.evil[this.settings.playerNumber]
      - Number(this.settings.characters[Character.Percival])
      - 1;
  }

  openInfoDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(InfoDialogComponent, dialogConfig);
  }
  openPlayerDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(PlayerDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.updateServants();
    });
  }
  openSettingsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(SettingsDialogComponent, dialogConfig);
  }
  muteButton() {
    this.settings.mute = !this.settings.mute;
    this.settings.saveSettings();
  }
}
