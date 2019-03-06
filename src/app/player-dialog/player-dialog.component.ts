import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {

  description: string;
  playerNum: number;

  constructor(
    private dialogRef: MatDialogRef<PlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;
    this.playerNum = data.playerNum;
  }

  ngOnInit() { }

  down() {
    if (this.playerNum > 5) {
      this.playerNum -= 1;
    }
  }
  up() {
    if (this.playerNum < 10) {
      this.playerNum += 1;
    }
  }

  save() {
    this.dialogRef.close(this.playerNum);
  }

  close() {
    this.dialogRef.close();
  }
}
