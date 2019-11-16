import 'announcer.dart';

class AnnouncerEnGbC extends Announcer {
  @override
  final List<String> files = const [
    'assets/audio/en-gb-C/output.ogg',
    'assets/audio/en-gb-C/output.m4a',
    'assets/audio/en-gb-C/output.mp3',
    'assets/audio/en-gb-C/output.ac3',
  ];

  @override
  final Map<String, List<int>> spriteList = const {
    'silence': [0, 1000],
    'and-extend-your': [2000, 3168],
    'and-look-around': [7000, 3624],
    'and-see-the-agen': [12000, 1992],
    'and-shut-up': [15000, 1128],
    'close-your-eyes': [18000, 1416],
    'everyone': [21000, 960],
    'except-mordred': [23000, 1368],
    'except-oberon': [26000, 1392],
    'eyes-closed': [29000, 1176],
    'merlin-and-morga': [32000, 1512],
    'merlin': [35000, 864],
    'minions-of-mordr': [37000, 1560],
    'open-your-eyes': [40000, 1368],
    'percival': [43000, 984],
    'put-your-thumbs': [45000, 1439],
    'so-that-merlin-w': [48000, 2088],
    'so-that-percival': [52000, 2256],
    'so-you-may-know': [56000, 2424],
    'stick-up-your-th': [60000, 1560],
    'thumbs-down': [63000, 1128],
  };

  const AnnouncerEnGbC();
}
