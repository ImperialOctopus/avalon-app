import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:avalon_app/src/settings_service.dart';

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
  ],
  providers: [ClassProvider(SettingsService)],
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

  int minions = 0;
  int servants = 0;

  final SettingsService _settingsService;
  MenuComponent(this._settingsService);

  @override
  Future<void> ngOnInit() async {
    _settingsService.loadSettings();
  }
}
