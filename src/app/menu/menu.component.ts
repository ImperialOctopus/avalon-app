import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  playerNumber: number;
  oberonEnabled: boolean;
  morgannaEnabled: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.playerNumber = 5;
    this.oberonEnabled = false;
    this.morgannaEnabled = false;
  }

  play() {
    this.router.navigate(['/play', this.playerNumber]);
  }

  oberon() {
    this.oberonEnabled = !this.oberonEnabled;
  }
  morganna() {
    this.morgannaEnabled = !this.morgannaEnabled;
  }
}
