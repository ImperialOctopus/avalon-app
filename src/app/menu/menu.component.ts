import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
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
  characters: object = {
    percival: false,
    mordred: false,
    oberon: false,
    morgana: false
  };

  playerNumber: number;
  servantNumber: number;
  minionNumber: number;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.playerNumber = this.settingsService.playerNumber;
    this.updateServants();
  }

  play() {
    this.router.navigate(['/play']);
  }

  toggleCharacter(char) {
    if (char === 'percival') {
      this.characters['percival'] = !this.characters['percival'];
    } else {
      if (this.characters[char] || this.minionNumber > 0) {
        this.characters[char] = !this.characters[char];
      }
    }
    this.updateServants();
  }

  updateServants() {
    this.minionNumber =
      this.evil[this.playerNumber] -
      (~~this.characters['mordred'] +
        ~~this.characters['morgana'] +
        ~~this.characters['oberon'] +
        1);
    this.servantNumber =
      this.playerNumber -
      this.evil[this.playerNumber] -
      ~~this.characters['percival'] -
      1;
  }

  openPlayerDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(PlayerDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.playerNumber = this.settingsService.playerNumber;
      this.updateServants();
    });
  }
  openSettingsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(SettingsDialogComponent, dialogConfig);
  }
}
