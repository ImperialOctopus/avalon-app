enum Setting { playerNumber }

class SettingsService {
  Map<Setting, dynamic> _settings = {
    Setting.playerNumber: 5,
  };

  SettingsService();

  void initialise() async {
    await Future.wait([
      (Future.value(5))
          .then((int value) => _settings[Setting.playerNumber] = value)
          .catchError((Error error) => _settings[Setting.playerNumber] = 5),
    ]);
  }

  dynamic getSetting(Setting setting) {
    return _settings[setting];
  }

  void setSetting(Setting setting, dynamic value) {
    _settings[setting] = value;
    // TODO Save value
  }
}
