enum Setting { playerNumber }

class SettingsService {
  static const defaultSettings = {
    Setting.playerNumber: 5,
  };
  Map<Setting, dynamic> _settings;

  SettingsService();

  void initialise() async {
    var box = await Hive.openBox('myBox');
    
    defaultSettings.forEach((Setting setting, dynamic value) {

    });
  }
}
