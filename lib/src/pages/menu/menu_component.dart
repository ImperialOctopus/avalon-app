import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
import 'package:avalon_app/src/character_service.dart';
import 'package:avalon_app/src/settings_service.dart';

import '../../routes.dart';

@Component(
  selector: 'menu_page',
  styleUrls: ['menu_component.css'],
  templateUrl: 'menu_component.html',
  directives: [
    MaterialCheckboxComponent,
    MaterialFabComponent,
    MaterialIconComponent,
    materialInputDirectives,
    NgFor,
    NgIf,
    routerDirectives,
  ],
  providers: [ClassProvider(SettingsService), ClassProvider(CharacterService)],
  exports: [Routes],
)
class MenuComponent implements OnInit {
  final SettingsService _settings;
  final CharacterService _characters;
  MenuComponent(this._settings, this._characters);

  @override
  Future<void> ngOnInit() async {
    await _settings.loadSettings();
  }

  void toggleMute() {
    _settings.toggleBoolSetting(Setting.mute)
  }

  /*
  openInfoDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(InfoDialogComponent, dialogConfig);
  }
  openPlayerDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(PlayerDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.updateServants();
    });
  }
  openSettingsDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(SettingsDialogComponent, dialogConfig);
  }
  */
}
