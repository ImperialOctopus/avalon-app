import 'package:avalon_app/src/settings_service.dart';

enum Character {
  percival,
  morgana,
  mordred,
  oberon,
}

class CharacterService {
  static const Map<int, int> evilProportion = {
    5: 2,
    6: 2,
    7: 3,
    8: 3,
    9: 3,
    10: 4,
  };

  final SettingsService _settings;
  CharacterService(this._settings);

  bool getCharacter(Character character) {
    return _settings.getSetting(Setting.characters)[character.index];
  }

  void setCharacter(Character character, bool value) {
    var newMap = _settings.getSetting(Setting.characters);
    newMap[character.index] = value;
    _settings.setSetting(Setting.characters, newMap);
  }

  int get evilCharacters {
    return (getCharacter(Character.morgana) ? 1 : 0) +
        (getCharacter(Character.mordred) ? 1 : 0) +
        (getCharacter(Character.oberon) ? 1 : 0) +
        1;
  }

  void toggleCharacter(Character character) {
    setCharacter(character, !getCharacter(character));

    while (evilCharacters >
        evilProportion[_settings.getSetting(Setting.playerNumber)]) {
      if (getCharacter(Character.oberon) && character != Character.oberon) {
        setCharacter(Character.oberon, false);
      } else if (getCharacter(Character.mordred) &&
          character != Character.mordred) {
        setCharacter(Character.mordred, false);
      } else if (getCharacter(Character.morgana) &&
          character != Character.morgana) {
        setCharacter(Character.morgana, false);
      }
    }
  }
}
