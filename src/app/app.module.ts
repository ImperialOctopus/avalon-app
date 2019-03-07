import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { PlayComponent } from "./play/play.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";

import { PlayerDialogComponent } from "./player-dialog/player-dialog.component";
import { SettingsDialogComponent } from "./settings-dialog/settings-dialog.component";

const appRoutes: Routes = [
  { path: "", component: MenuComponent },
  { path: "play/:n", component: PlayComponent },
  { path: "**", component: MenuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlayComponent,
    PlayerDialogComponent,
    SettingsDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PlayerDialogComponent, SettingsDialogComponent]
})
export class AppModule {}
