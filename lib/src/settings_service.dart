import 'package:hive/hive.dart';

enum Setting { playerNumber }

class SettingsService {
  static const defaultSettings = {
    Setting.playerNumber: 5,
  };
  Map<Setting, dynamic> _settings;

  SettingsService();

  void loadSettings() async {
    print("wow");
    var box = await Hive.openBox('avalon-app');

    defaultSettings.forEach((Setting setting, dynamic value) {
      dynamic localValue = box.get(setting);
      print(localValue);
    });
  }
}
