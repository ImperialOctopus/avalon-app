import 'package:avalon_app/src/settings_service.dart';

enum Character {
  percival,
  morgana,
  mordred,
  oberon,
}

class CharacterService {
  static const Map<int, int> _evilProportion = {
    5: 2,
    6: 2,
    7: 3,
    8: 3,
    9: 3,
    10: 4,
  };

  final SettingsService _settings;
  CharacterService(this._settings);

  Map<Character, bool> getAll() {
    Map<dynamic, dynamic> charList = _settings.getSetting(Setting.characters);
    return Map.fromIterable(Character.values,
        key: (v) => v, value: (v) => charList[v.index] as bool);
  }

  bool getCharacter(Character character) {
    return _settings.getSetting(Setting.characters)[character.index];
  }

  void setCharacter(Character character, bool value) {
    var newMap = Map.from(_settings.getSetting(Setting.characters));
    newMap[character.index] = value;
    _settings.setSetting(Setting.characters, newMap);
  }

  void toggleCharacter(Character character) {
    setCharacter(character, !getCharacter(character));
    autoDisableCharacters(character: character);
  }

  void autoDisableCharacters({Character character}) {
    while (_specialEvil >
        _evilProportion[_settings.getSetting(Setting.playerNumber)]) {
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

  int get _playerNumber => _settings.getSetting(Setting.playerNumber);

  int get _totalEvil => _evilProportion[_playerNumber];
  int get _totalGood => _playerNumber - _totalEvil;

  int get _specialEvil {
    return (getCharacter(Character.morgana) ? 1 : 0) +
        (getCharacter(Character.mordred) ? 1 : 0) +
        (getCharacter(Character.oberon) ? 1 : 0) +
        1;
  }

  int get _specialGood {
    return (getCharacter(Character.percival) ? 1 : 0) + 1;
  }

  int get minions => _totalEvil - _specialEvil;
  int get servants => _totalGood - _specialGood;
}
