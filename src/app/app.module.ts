import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlayComponent } from './play/play.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'play/:n', component: PlayComponent },
  { path: '**', component: MenuComponent }
];

@NgModule({
  declarations: [AppComponent, MenuComponent, PlayComponent, PlayerDialogComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    MatListModule, MatButtonModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PlayerDialogComponent]
})
export class AppModule { }
