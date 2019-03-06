import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { SettingsService } from "../settings.service";

@Component({
  selector: "app-settings-dialog",
  templateUrl: "./settings-dialog.component.html",
  styleUrls: ["./settings-dialog.component.scss"]
})
export class SettingsDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<SettingsDialogComponent>,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
