import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:howler/howler.dart';

import '../../announcers/announcer.dart';
import '../../announcers/announcer_cathy.dart';
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
  Announcer _announcer;
  Howl _howl;
  List<SoundElement> _soundList;

  final SettingsService _settings;
  final ScriptService _script;
  PlayComponent(this._settings, this._script);

  @override
  Future<void> ngOnInit() async {
    await _settings.loadSettings();
    _soundList = _script.loadScript();
    _announcer = AnnouncerCathy();
    _howl = Howl(
      src: _announcer.files,
      sprite: _announcer.spriteList,
      mute: _settings.getSetting(Setting.mute),
    );
    _howl.on('end', (void _a, void _b, void _c, void _d) => playNext(), 0);
    playNext();
  }

  void playNext() {

  }
}
