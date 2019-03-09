import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {
  private _announcer: string;
  private _verbose: boolean;
  private _flair: boolean;
  private _tiger: boolean;

  constructor(
    private dialogRef: MatDialogRef<SettingsDialogComponent>,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this._announcer = this.settingsService.announcer;
    this._verbose = this.settingsService.verbose;
    this._flair = this.settingsService.flair;
    this._tiger = this.settingsService.tiger;
  }

  save() {
    this.settingsService.announcer = this._announcer;
    this.settingsService.verbose = this._verbose;
    this.settingsService.flair = this._flair;
    this.settingsService.tiger = this._tiger;
    this.dialogRef.close();
  }
}
