import 'announcer.dart';

class AnnouncerEnGbD extends Announcer {
  @override
  final List<String> files = const [
    'assets/audio/cathy/output.ogg',
    'assets/audio/cathy/output.m4a',
    'assets/audio/cathy/output.mp3',
    'assets/audio/cathy/output.ac3',
  ];

  @override
  final Map<String, List<double>> spriteList = const {
    'silence': [0, 1000],
    'everyone': [2000, 1335],
    'close-your-eyes': [5000, 1671],
    'and-extend-your': [8000, 3465],
    'and-shut-up': [13000, 1253],
    'minions-of-mordr': [16000, 1845],
    'except-oberon': [19000, 1642],
    'open-your-eyes': [22000, 1219],
    'and-look-around': [25000, 4167],
    'eyes-closed': [31000, 1184],
    'except-mordred': [34000, 1787],
    'stick-up-your-th': [37000, 1491],
    'so-that-merlin-w': [40000, 3030],
    'merlin': [45000, 1782],
    'and-see-the-agen': [48000, 3036],
    'put-your-thumbs': [53000, 1625],
    'thumbs-down': [56000, 952],
    'merlin-and-morga': [58000, 2879],
    'so-that-percival': [62000, 2943],
    'percival': [66000, 975],
    'so-you-may-know': [68000, 4086]
  };

  const AnnouncerEnGbD();
}
