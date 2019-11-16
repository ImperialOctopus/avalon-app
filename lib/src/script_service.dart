import 'character_service.dart';
import 'sound_element.dart';

class ScriptService {
  static List<SoundElement> buildScript({
    String announcer = "en-gb-C",
    bool verbose = false,
    bool flair = false,
    Map<int, bool> characters = const {
      0: false,
      1: false,
      2: false,
      3: false,
    },
  }) {
    List<SoundElement> array = List<SoundElement>();

    array.add(SoundElement(
        'everyone', 'Everyone', 'assets/characters/loyal-servant.png'));
    array.add(SoundElement('close-your-eyes', 'Close your eyes',
        'assets/characters/loyal-servant.png'));
    if (verbose) {
      array.add(SoundElement('and-extend-your', 'And extend your fist',
          'assets/characters/loyal-servant.png'));
    }
    if (flair) {
      array.add(SoundElement('and-shut-up', 'And shut up!',
          'assets/characters/loyal-servant.png'));
    }
    array.add(
        SoundElement('silence', '', 'assets/characters/loyal-servant.png'));
    array.add(SoundElement('minions-of-mordr', 'Minions of Mordred',
        'assets/characters/minion.png'));
    if (characters[Character.oberon.index]) {
      array.add(SoundElement(
          'except-oberon', 'Except Oberon', 'assets/characters/oberon.png'));
    }
    array.add(SoundElement(
        'open-your-eyes', 'Open your eyes', 'assets/characters/minion.png'));
    if (verbose) {
      array.add(SoundElement('and-look-around', 'And look around...',
          'assets/characters/minion.png'));
      array.add(SoundElement('silence', '', 'assets/characters/minion.png'));
      array.add(SoundElement('silence', '', 'assets/characters/minion.png'));
      array.add(SoundElement('minions-of-mordr', 'Minions of Mordred',
          'assets/characters/minion.png'));
      array.add(SoundElement('close-your-eyes', 'Close your eyes',
          'assets/characters/minion.png'));
    } else {
      array.add(SoundElement('silence', '', 'assets/characters/minion.png'));
      array.add(SoundElement('silence', '', 'assets/characters/minion.png'));
      array.add(SoundElement(
          'eyes-closed', 'Eyes closed', 'assets/characters/minion.png'));
    }
    array.add(SoundElement('minions-of-mordr', 'Minions of Mordred',
        'assets/characters/minion.png'));
    if (characters[Character.mordred.index]) {
      array.add(SoundElement(
          'except-mordred', 'Except Mordred', 'assets/characters/mordred.png'));
    }
    array.add(SoundElement('stick-up-your-th', 'Stick up your thumbs',
        'assets/characters/minion.png'));
    if (verbose) {
      array.add(SoundElement('so-that-merlin-w',
          'So that Merlin will know of you', 'assets/characters/merlin.png'));
    }
    array.add(SoundElement('silence', '', 'assets/characters/minion.png'));
    array.add(SoundElement('merlin', 'Merlin', 'assets/characters/merlin.png'));
    array.add(SoundElement(
        'open-your-eyes', 'Open your eyes', 'assets/characters/merlin.png'));
    if (verbose) {
      array.add(SoundElement('and-see-the-agen', 'And see the agents of evil',
          'assets/characters/merlin.png'));
      array.add(SoundElement('silence', '', 'assets/characters/merlin.png'));
      array.add(SoundElement('silence', '', 'assets/characters/merlin.png'));
      array.add(SoundElement('minions-of-mordr', 'Minions of Mordred',
          'assets/characters/minion.png'));
      array.add(SoundElement('put-your-thumbs', 'Put your thumbs away',
          'assets/characters/minion.png'));
      array.add(
          SoundElement('merlin', 'Merlin', 'assets/characters/merlin.png'));
      array.add(SoundElement('close-your-eyes', 'Close your eyes',
          'assets/characters/merlin.png'));
    } else {
      array.add(SoundElement('silence', '', 'assets/characters/merlin.png'));
      array.add(SoundElement('silence', '', 'assets/characters/merlin.png'));
      array.add(SoundElement('thumbs-down', 'Thumbs down, eyes closed',
          'assets/characters/merlin.png'));
      array.add(SoundElement('eyes-closed', 'Thumbs down, eyes closed',
          'assets/characters/merlin.png'));
    }
    if (characters[Character.morgana.index] &&
        characters[Character.percival.index]) {
      array.add(SoundElement('merlin-and-morga', 'Merlin and Morgana',
          'assets/characters/morgana.png'));
      array.add(SoundElement('stick-up-your-th', 'Stick up your thumbs',
          'assets/characters/morgana.png'));
      if (verbose) {
        array.add(SoundElement(
            'so-that-percival',
            'So that Percival may know of you',
            'assets/characters/percival.png'));
      }
      array.add(SoundElement('silence', '', 'assets/characters/morgana.png'));
      array.add(SoundElement(
          'percival', 'Percival', 'assets/characters/percival.png'));
      array.add(SoundElement('open-your-eyes', 'Open your eyes',
          'assets/characters/percival.png'));
      if (verbose) {
        array.add(SoundElement(
            'so-you-may-know',
            'So you may know Merlin and Morgana',
            'assets/characters/percival.png'));
        array
            .add(SoundElement('silence', '', 'assets/characters/percival.png'));
        array
            .add(SoundElement('silence', '', 'assets/characters/percival.png'));
        array.add(SoundElement('merlin-and-morga', 'Merlin and Morgana',
            'assets/characters/morgana.png'));
        array.add(SoundElement('put-your-thumbs', 'Put your thumbs away',
            'assets/characters/morgana.png'));
        array.add(SoundElement(
            'percival', 'Percival', 'assets/characters/percival.png'));
        array.add(SoundElement('close-your-eyes', 'Close your eyes',
            'assets/characters/percival.png'));
      } else {
        array
            .add(SoundElement('silence', '', 'assets/characters/percival.png'));
        array
            .add(SoundElement('silence', '', 'assets/characters/percival.png'));
        array.add(SoundElement('thumbs-down', 'Thumbs down, eyes closed',
            'assets/characters/percival.png'));
        array.add(SoundElement('eyes-closed', 'Thumbs down, eyes closed',
            'assets/characters/percival.png'));
      }
    }
    array.add(SoundElement(
        'everyone', 'Everyone', 'assets/characters/loyal-servant.png'));
    array.add(SoundElement('open-your-eyes', 'Open your eyes',
        'assets/characters/loyal-servant.png'));

    return array;
  }
}
