import 'package:avalon_app/src/announcers/announcer.dart';
import 'package:hive/hive.dart';

enum Setting {
  playerNumber,
  announcer,
  mute,
  verbose,
  flair,
  characters,
}

class SettingsService {
  static const defaultSettings = {
    Setting.playerNumber: 5,
    Setting.announcer: 0,
    Setting.mute: true,
    Setting.verbose: false,
    Setting.flair: false,
    Setting.characters: {
      0: false,
      1: false,
      2: false,
      3: false,
    },
  };
  Map<Setting, dynamic> _settings = Map.from(defaultSettings);
  Box _box;

  SettingsService();

  void loadSettings() async {
    _box = await Hive.openBox('avalon-app');

    defaultSettings.forEach((Setting setting, dynamic value) {
      try {
        _settings[setting] = _box.get(setting.index, defaultValue: value);
      } catch (e) {
        _settings[setting] = value;
      }
    });
  }

  dynamic getSetting(Setting setting) {
    switch (setting) {
      case Setting.announcer:
        {
          return AnnouncerID.values[_settings[Setting.announcer]];
        }
        break;
      default:
        {
          return _settings[setting];
        }
    }
  }

  void setSetting(Setting setting, dynamic value) {
    switch (setting) {
      case Setting.announcer:
        {
          _settings[setting] = value.index;
        }
        break;
      default:
        {
          _settings[setting] = value;
        }
    }
    _box.put(setting.index, _settings[setting]);
  }

  void toggleBoolSetting(Setting setting) {
    setSetting(setting, !getSetting(setting));
  }
}
