import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  evil: Object = {
    5: 2,
    6: 2,
    7: 3,
    8: 3,
    9: 3,
    10: 4
  };
  characters: Object = {
    percival: false,
    mordred: false,
    oberon: false,
    morgana: false
  };

  playerNumber: number = 5;
  servantNumber: number;
  minionNumber: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateNumbers();
  }

  play() {
    this.router.navigate(["/play", this.playerNumber]);
  }

  toggleCharacter(char) {
    if (char == "percival") {
      this.characters["percival"] = !this.characters["percival"];
    }
    if (char == "mordred") {
      if (this.characters["mordred"] || this.minionNumber > 0) {
        this.characters["mordred"] = !this.characters["mordred"];
      } else {
      }
    }

    this.updateNumbers();
  }

  updateNumbers() {
    this.minionNumber =
      this.evil[this.playerNumber] -
      (~~this.characters["mordred"] +
        ~~this.characters["morgana"] +
        ~~this.characters["oberon"]);
    this.servantNumber =
      this.playerNumber -
      this.evil[this.playerNumber] -
      ~~this.characters["percival"] -
      1;
  }
}
