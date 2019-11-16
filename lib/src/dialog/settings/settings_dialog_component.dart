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
import 'package:avalon_app/src/settings_service.dart';

@Component(
  selector: 'settings-dialog',
  templateUrl: 'settings_dialog_component.html',
  styleUrls: ['settings_dialog_component.css'],
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
  providers: [overlayBindings],
  exports: [Setting],
)
class SettingsDialogComponent {
  final SettingsService _settings;
  SettingsDialogComponent(this._settings);

  String get announcer => _settings.getSetting(Setting.announcer);
  bool get verbose => _settings.getSetting(Setting.verbose);
  bool get flair => _settings.getSetting(Setting.flair);

  void setAnnouncer(String announcer) =>
      _settings.setSetting(Setting.announcer, announcer);

  void toggleSetting(Setting setting) => _settings.toggleBoolSetting(setting);
}
