import { Component } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent {

  constructor(
    private settings: SettingsService
  ) { }

  down() {
    if (this.settings.playerNumber > 5) {
      this.settings.playerNumber -= 1;
      this.settings.saveSettings();
    }
  }
  up() {
    if (this.settings.playerNumber < 10) {
      this.settings.playerNumber += 1;
      this.settings.saveSettings();
    }
  }
}
