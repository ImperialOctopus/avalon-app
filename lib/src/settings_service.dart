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
    Setting.announcer: 'en-gb-C',
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
  Map<Setting, dynamic> _settings = Map<Setting, dynamic>();
  Box _box;

  SettingsService();

  void loadSettings() async {
    _box = await Hive.openBox('avalon-app');

    defaultSettings.forEach((Setting setting, dynamic value) {
      _settings[setting] =
          _box.get(setting.index, defaultValue: defaultSettings[setting]);
    });
  }

  dynamic getSetting(Setting setting) {
    return _settings[setting];
  }

  void setSetting(Setting setting, dynamic value) {
    _settings[setting] = value;
    _box.put(setting.index, value);
  }
}
