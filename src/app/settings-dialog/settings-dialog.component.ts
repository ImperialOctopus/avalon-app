import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {
  announcer: string;

  constructor(
    private dialogRef: MatDialogRef<SettingsDialogComponent>,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.announcer = 'cathy';
  }

  close() {
    this.dialogRef.close();
  }
}
