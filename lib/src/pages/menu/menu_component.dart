import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
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
  providers: [ClassProvider(SettingsService)],
  exports: [Routes],
)
class MenuComponent implements OnInit {
  static const Map<int, int> evilProportion = {
    5: 2,
    6: 2,
    7: 3,
    8: 3,
    9: 3,
    10: 4,
  };

  final SettingsService _settingsService;
  MenuComponent(this._settingsService);

  @override
  Future<void> ngOnInit() async {
    await _settingsService.loadSettings();
  }

  void toggleCharacter(String character) {
    Characters
    switch (character) {
      case "percival":
        
        break;
      case "morgana":
        
        break;
      case "mordred":
        
        break;
      case "oberon":
        
        break;
      default:
    }
    this.settings.characters[char] = !this.settings.characters[char];
    while (this.evilCharacters() > this.evil[this.settings.playerNumber]) {
      if (this.settings.characters[Character.Oberon] && char !== Character.Oberon) {
        this.settings.characters[Character.Oberon] = false;
      } else if (this.settings.characters[Character.Mordred] && char !== Character.Mordred) {
        this.settings.characters[Character.Mordred] = false;
      } else if (this.settings.characters[Character.Morgana] && char !== Character.Morgana) {
        this.settings.characters[Character.Morgana] = false;
      }
    }
  }
}
