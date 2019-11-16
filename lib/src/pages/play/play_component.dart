import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular_router/angular_router.dart';
import 'package:avalon_app/src/character_service.dart';
import 'package:howler/howler.dart';

import '../../announcers/announcer.dart';
import '../../announcers/announcer_cathy.dart';
import '../../routes.dart';
import '../../script_service.dart';
import '../../settings_service.dart';
import '../../sound_element.dart';

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
  providers: [
    ClassProvider(SettingsService),
    ClassProvider(CharacterService),
    ClassProvider(ScriptService),
  ],
  exports: [Setting],
)
class PlayComponent implements OnInit {
  bool paused = false;
  String cardImage = "";
  String cardText = "";

  Announcer _announcer;
  Howl _howl;
  List<SoundElement> _soundList;

  final Router _router;
  final SettingsService _settings;
  final CharacterService _characters;
  final ScriptService _script;
  PlayComponent(this._router, this._settings, this._characters, this._script);

  SettingsService get settings => _settings;

  @override
  Future<void> ngOnInit() async {
    await _settings.loadSettings();

    _soundList = _script.buildScript(
      announcer: _settings.getSetting(Setting.announcer),
      verbose: _settings.getSetting(Setting.verbose),
      flair: _settings.getSetting(Setting.flair),
      characters: _characters.getAll(),
    );
    switch (_settings.getSetting(Setting.announcer)) {
      case 'en-gb-D':
        {
          _announcer = AnnouncerCathy();
        }
        break;
      case 'en-gb-C':
        {
          _announcer = AnnouncerCathy();
        }
        break;
      case 'cathy':
        {
          _announcer = AnnouncerCathy();
        }
        break;
    }
    _announcer = _howl = Howl(
      src: _announcer.files,
      sprite: _announcer.spriteList,
      mute: _settings.getSetting(Setting.mute),
      onend: (void _a, void _b, void _c, void _d) => playNext(),
    );
    playNext();
  }

  void playNext() {
    if (_soundList.isNotEmpty) {
      SoundElement element = _soundList.removeAt(0);
      cardImage = element.image;
      cardText = element.title;
      _howl.play(element.sound);
    } else {
      endPlayback();
    }
  }

  void togglePause() {
    paused = !paused;
    if (paused) {
      _howl.pause(null);
    } else {
      _howl.play();
    }
  }

  void toggleMute() {
    _settings.toggleBoolSetting(Setting.mute);
    _howl.mute(_settings.getSetting(Setting.mute));
  }

  void endPlayback() {
    _howl.unload();
    _router.navigate(Routes.menu_page.toUrl());
  }
}
