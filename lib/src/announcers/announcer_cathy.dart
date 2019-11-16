import 'package:avalon_app/src/announcers/announcer.dart';

import 'sprite.dart';

class AnnouncerCathy extends Announcer {
  static const List<String> files = [
    'assets/audio/cathy/output.ogg',
    'assets/audio/cathy/output.m4a',
    'assets/audio/cathy/output.mp3',
    'assets/audio/cathy/output.ac3',
  ];
  static const List<dynamic> spriteList = [
    Sprite('silence', 0, 1000),
    Sprite('everyone', 2000, 1335.1473922902492),
    Sprite('close-your-eyes', 5000, 1671.836734693878),
    Sprite('and-extend-your', 8000, 3465.5782312925166),
    Sprite('and-shut-up', 13000, 1253.877551020409),
    Sprite('minions-of-mordr', 16000, 1845.9863945578227),
    Sprite('except-oberon', 19000, 1642.8117913832202),
    Sprite('open-your-eyes', 22000, 1219.0476190476184),
    Sprite('and-look-around', 25000, 4167.981859410432),
    Sprite('eyes-closed', 31000, 1184.2176870748276),
    Sprite('except-mordred', 34000, 1787.9365079365073),
    Sprite('stick-up-your-th', 37000, 1491.8820861677987),
    Sprite('so-that-merlin-w', 40000, 3030.204081632654),
    Sprite('merlin', 45000, 1782.1315192743796),
    Sprite('and-see-the-agen', 48000, 3036.0090702947814),
    Sprite('put-your-thumbs', 53000, 1625.3968253968267),
    Sprite('thumbs-down', 56000, 952.0181405895727),
    Sprite('merlin-and-morga', 58000, 2879.2743764172355),
    Sprite('so-that-percival', 62000, 2943.1292517006823),
    Sprite('percival', 66000, 975.2380952380975),
    Sprite('so-you-may-know', 68000, 4086.712018140588),
  ];

  const AnnouncerCathy();
}
