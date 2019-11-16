// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:angular/angular.dart';
import 'package:angular_components/auto_dismiss/auto_dismiss.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_tooltip/material_tooltip.dart';
import 'package:avalon_app/src/character_service.dart';

import '../../settings_service.dart';

@Component(
  selector: 'player-dialog',
  templateUrl: 'player_dialog_component.html',
  styleUrls: ['player_dialog_component.css'],
  directives: [
    AutoDismissDirective,
    AutoFocusDirective,
    MaterialIconComponent,
    MaterialButtonComponent,
    MaterialTooltipDirective,
    MaterialDialogComponent,
    ModalComponent,
    NgFor,
    NgIf
  ],
  providers: [
    overlayBindings,
  ],
  exports: [Setting],
)
class PlayerDialogComponent {
  final SettingsService _settings;
  final CharacterService _characters;
  PlayerDialogComponent(this._settings, this._characters);

  int get _playerNumber => _settings.getSetting(Setting.playerNumber);

  void down() {
    if (_playerNumber > 5) {
      _settings.setSetting(Setting.playerNumber, _playerNumber - 1);
      _characters.autoDisableCharacters();
    }
  }

  void up() {
    if (_playerNumber < 10) {
      _settings.setSetting(Setting.playerNumber, _playerNumber + 1);
    }
  }
}
