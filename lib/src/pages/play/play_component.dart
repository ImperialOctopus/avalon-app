import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

import '../../settings_service.dart';

@Component(
  selector: 'play-page',
  styleUrls: ['play_component.css'],
  templateUrl: 'play_component.html',
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
class PlayComponent implements OnInit {
  final SettingsService _settings;
  PlayComponent(this._settings);

  @override
  Future<void> ngOnInit() async {
    await _settings.loadSettings();
    
  }
}
