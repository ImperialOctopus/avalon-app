import { SoundElement } from './sound-element';

export class Announcer {
  files: Array<string>;
  spritelist: object;

  constructor(_files: Array<string>, _spritelist: object) {
    this.files = _files;
    this.spritelist = _spritelist;
  }

  loadScript(
    verbose: boolean, flair: boolean, percival: boolean, oberon: boolean, mordred: boolean, morgana: boolean): Array<SoundElement> {
    const array: Array<SoundElement> = new Array<SoundElement>();

    array.push(new SoundElement('everyone', 'Everyone', '/assets/characters/loyal-servant.jpg'));
    array.push(new SoundElement('close-your-eyes', 'Close your eyes', '/assets/characters/loyal-servant.jpg'));
    if (verbose) {
      array.push(new SoundElement('and-extend-your', 'And extend your fist', '/assets/characters/loyal-servant.jpg'));
    }
    if (flair) {
      array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
    }
    array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', '/assets/characters/minion.jpg'));
    if (oberon) {
      // {(except Oberon)}
      array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
    }
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', '/assets/characters/minion.jpg'));
    if (verbose) {
      // (and look around so that you know the other agents of Evil)
      array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
      array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', '/assets/characters/minion.jpg'));
      array.push(new SoundElement('close-your-eyes', 'Close your eyes', '/assets/characters/minion.jpg'));
    } else {
      // -(Eyes closed)
      array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
    }

    array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', '/assets/characters/minion.jpg'));
    if (mordred) {
      // {(not Mordred himself)}
      array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
    }
    array.push(new SoundElement('stick-up-your-th', 'Stick up your thumbs', '/assets/characters/minion.jpg'));
    if (verbose) {
      // (so that Merlin will know of you)
      array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
    }
    array.push(new SoundElement('merlin', 'Merlin', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', '/assets/characters/merlin.jpg'));
    if (verbose) {
      // (and see the agents of evil)
      array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
      array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', '/assets/characters/minion.jpg'));
      array.push(new SoundElement('put-your-thumbs', 'Put your thumbs away', '/assets/characters/minion.jpg'));
      array.push(new SoundElement('merlin', 'Merlin', '/assets/characters/merlin.jpg'));
      array.push(new SoundElement('close-your-eyes', 'Close your eyes', '/assets/characters/merlin.jpg'));
    } else {
      // -(Thumbs down, eyes closed)
      array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
    }
    if (percival) {
      array.push(new SoundElement('merlin-and-morga', 'Merlin and Morgana', '/assets/characters/morgana.jpg'));
      array.push(new SoundElement('stick-up-your-th', 'Stick up your thumbs', '/assets/characters/morgana.jpg'));
      if (verbose) {
        // (so that Percival may know of you)
        array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
      }
      array.push(new SoundElement('percival', 'Percival', '/assets/characters/percival.jpg'));
      array.push(new SoundElement('open-your-eyes', 'Open your eyes', '/assets/characters/percival.jpg'));
      if (verbose) {
        // (so you may know Merlin and Morgana)
        array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
        array.push(new SoundElement('merlin-and-morga', 'Merlin and Morgana', '/assets/characters/morgana.jpg'));
        array.push(new SoundElement('put-your-thumbs', 'Put your thumbs away', '/assets/characters/morgana.jpg'));
        array.push(new SoundElement('percival', 'Percival', '/assets/characters/percival.jpg'));
        array.push(new SoundElement('close-your-eyes', 'Close your eyes', '/assets/characters/percival.jpg'));
      } else {
        // -(Thumbs down, eyes closed)
        array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/loyal-servant.jpg'));
      }
    }
    array.push(new SoundElement('everyone', 'Everyone', '/assets/characters/loyal-servant.jpg'));
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', '/assets/characters/loyal-servant.jpg'));

    return array;
  }
}
