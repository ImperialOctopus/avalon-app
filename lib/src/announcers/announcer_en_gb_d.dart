import 'announcer.dart';

class AnnouncerEnGbD extends Announcer {
  @override
  final List<String> files = const [
    'assets/audio/en-gb-D/output.ogg',
    'assets/audio/en-gb-D/output.m4a',
    'assets/audio/en-gb-D/output.mp3',
    'assets/audio/en-gb-D/output.ac3',
  ];

  @override
  final Map<String, List<int>> spriteList = const {
    'silence': [0, 1000],
    'and-extend-your': [2000, 3312],
    'and-look-around': [7000, 3696],
    'and-see-the-agen': [12000, 2064],
    'and-shut-up': [16000, 1032],
    'close-your-eyes': [19000, 1464],
    'everyone': [22000, 984],
    'except-mordred': [24000, 1344],
    'except-oberon': [27000, 1440],
    'eyes-closed': [30000, 1199],
    'merlin-and-morga': [33000, 1488],
    'merlin': [36000, 864],
    'minions-of-mordr': [38000, 1439],
    'open-your-eyes': [41000, 1439],
    'percival': [44000, 984],
    'put-your-thumbs': [46000, 1439],
    'so-that-merlin-w': [49000, 2016],
    'so-that-percival': [53000, 2232],
    'so-you-may-know': [57000, 2399],
    'stick-up-your-th': [61000, 1608],
    'thumbs-down': [64000, 1152],
  };

  const AnnouncerEnGbD();
}
