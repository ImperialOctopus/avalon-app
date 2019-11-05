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

  
}
