import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {

  _playerNumber: number;

  constructor(
    private dialogRef: MatDialogRef<PlayerDialogComponent>,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this._playerNumber = this.settingsService.playerNumber;
  }

  down() {
    if (this._playerNumber > 5) {
      this._playerNumber -= 1;
    }
  }
  up() {
    if (this._playerNumber < 10) {
      this._playerNumber += 1;
    }
  }

  save() {
    this.settingsService.playerNumber = this._playerNumber;
    this.settingsService.saveSettings();
    this.dialogRef.close();
  }
}
