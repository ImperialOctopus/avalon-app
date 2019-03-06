import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PlayerDialogComponent } from '../player-dialog/player-dialog.component';
import { SettingsService } from '../settings.service';


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

  playerNumber = 5;
  servantNumber: number;
  minionNumber: number;

  constructor(private router: Router, private dialog: MatDialog, private settingsService: SettingsService) { }

  ngOnInit() {
    this.updateNumbers();
  }

  play() {
    this.router.navigate(['/play', this.playerNumber]);
  }

  toggleCharacter(char) {
    if (char === 'percival') {
      this.characters['percival'] = !this.characters['percival'];
    } else {
      if (this.characters[char] || this.minionNumber > 0) {
        this.characters[char] = !this.characters[char];
      }
    }
    this.updateNumbers();
  }

  updateNumbers() {
    this.minionNumber =
      this.evil[this.playerNumber] -
      (~~this.characters['mordred'] +
        ~~this.characters['morgana'] +
        ~~this.characters['oberon'] + 1);
    this.servantNumber =
      this.playerNumber -
      this.evil[this.playerNumber] -
      ~~this.characters['percival'] -
      1;
  }

  openPlayerDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      playerNum: this.playerNumber
    };

    const dialogRef = this.dialog.open(PlayerDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.playerNumber = data
    );
  }
}
