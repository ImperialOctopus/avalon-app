import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SettingsService } from '../settings.service';


@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {

  playerNum: number;

  constructor(private dialogRef: MatDialogRef<PlayerDialogComponent>, private settingsService: SettingsService) { }

  ngOnInit() {
    this.playerNum = this.settingsService.playerNumber;
  }

  down() {
    if (this.playerNum > 5) {
      this.playerNum -= 1;
    }
    this.settingsService.setPlayerNumber(this.playerNum);
  }
  up() {
    if (this.playerNum < 10) {
      this.playerNum += 1;
    }
    this.settingsService.setPlayerNumber(this.playerNum);
  }

  close() {
    this.dialogRef.close();
  }
}
