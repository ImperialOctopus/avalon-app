import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<SettingsDialogComponent>,
    private settings: SettingsService
  ) { }

  changeAnnouncer(a: string) {
    this.settings.announcer = a;
    this.settings.saveSettings();
  }

  verbose() {
    this.settings.verbose = !this.settings.verbose;
    this.settings.saveSettings();
  }

  flair() {
    this.settings.flair = !this.settings.flair;
    this.settings.saveSettings();
  }

  close() {
    this.dialogRef.close();
  }
}
