import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<PlayerDialogComponent>,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
  }

  down() {
    if (this.settingsService.playerNumber > 5) {
      this.settingsService.playerNumber -= 1;
    }
  }
  up() {
    if (this.settingsService.playerNumber < 10) {
      this.settingsService.playerNumber += 1;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
