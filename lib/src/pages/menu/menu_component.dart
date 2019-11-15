import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';

import '../../character_service.dart';
import '../../routes.dart';
import '../../settings_service.dart';
import '../../dialog/info/info_dialog_component.dart';
import '../../dialog/settings/settings_dialog_component.dart';
import '../../dialog/player/player_dialog_component.dart';

@Component(
  selector: 'menu-page',
  styleUrls: ['menu_component.css'],
  templateUrl: 'menu_component.html',
  directives: [
    AutoDismissDirective,
    AutoFocusDirective,
    MaterialIconComponent,
    MaterialButtonComponent,
    MaterialTooltipDirective,
    MaterialDialogComponent,
    ModalComponent,
    MaterialCheckboxComponent,
    MaterialFabComponent,
    materialInputDirectives,
    NgFor,
    NgIf,
    NgClass,
    routerDirectives,
    InfoDialogComponent,
    SettingsDialogComponent,
    PlayerDialogComponent,
  ],
  providers: [
    ClassProvider(SettingsService),
    ClassProvider(CharacterService),
    overlayBindings,
  ],
  exports: [Routes, Character, Setting],
)
class MenuComponent implements OnInit {
  bool infoDialogVisible = false;
  bool playerDialogVisible = false;
  bool settingsDialogVisible = false;

  final SettingsService _settings;
  final CharacterService _characters;
  MenuComponent(this._settings, this._characters);

  @override
  Future<void> ngOnInit() async {
    await _settings.loadSettings();
  }

  CharacterService get characters => _characters;
  SettingsService get settings => _settings;

  void toggleMute() {
    _settings.toggleBoolSetting(Setting.mute);
  }

  void toggleCharacter(Character character) {
    _characters.toggleCharacter(character);
  }

  void openInfoDialog() => infoDialogVisible = true;
  void openPlayerDialog() => playerDialogVisible = true;
  void openSettingsDialog() => settingsDialogVisible = true;

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
