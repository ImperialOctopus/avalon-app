import { SoundElement } from './sound-element';

export class Announcer {
  files: Array<string>;
  spritelist: object;

  constructor(_files: Array<string>, _spritelist: object) {
    this.files = _files;
    this.spritelist = _spritelist;
  }

  loadScript(settings: object): Array<SoundElement> {
    const array: Array<SoundElement> = new Array<SoundElement>();

    array.push(new SoundElement('everyone', 'Everyone', '/assets/characters/loyal-servant.jpg'));
    array.push(new SoundElement('close-your-eyes', 'Close your eyes', '/assets/characters/loyal-servant.jpg'));
    array.push(new SoundElement('silence-500', '', '/assets/characters/loyal-servant.jpg'));
    // (and extend your hand into a fist in front of you)
    //   [and shut up]
    array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', '/assets/characters/minion.jpg'));
    // {(except Oberon)}
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', '/assets/characters/minion.jpg'));
    array.push(new SoundElement('silence-1000', '', '/assets/characters/minion.jpg'));
    array.push(new SoundElement('silence-1000', '', '/assets/characters/minion.jpg'));
    array.push(new SoundElement('silence-1000', '', '/assets/characters/minion.jpg'));
    // (and look around so that you know the other agents of Evil)
    array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', '/assets/characters/minion.jpg'));
    array.push(new SoundElement('close-your-eyes', 'Close your eyes', '/assets/characters/minion.jpg'));
    array.push(new SoundElement('silence-500', '', '/assets/characters/minion.jpg'));
    // -(Eyes closed)
    array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', '/assets/characters/minion.jpg'));
    // {(not Mordred himself)}
    array.push(new SoundElement('stick-up-your-th', 'Stick up your thumbs', '/assets/characters/minion.jpg'));
    array.push(new SoundElement('silence-500', '', '/assets/characters/minion.jpg'));
    // (so that Merlin will know of you)
    array.push(new SoundElement('merlin', 'Merlin', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('silence-1000', '', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('silence-1000', '', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('silence-1000', '', '/assets/characters/merlin.jpg'));
    // (and see the agents of evil)
    array.push(new SoundElement('minions-of-mordr', 'Minions of Mordred', '/assets/characters/minion.jpg'));
    array.push(new SoundElement('put-your-thumbs', 'Put your thumbs away', '/assets/characters/minion.jpg'));
    array.push(new SoundElement('silence-500', '', '/assets/characters/minion.jpg'));
    array.push(new SoundElement('merlin', 'Merlin', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('close-your-eyes', 'Close your eyes', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('silence-500', '', '/assets/characters/merlin.jpg'));
    // -(Thumbs down, eyes closed)
    array.push(new SoundElement('merlin-and-morga', 'Merlin and Morgana', '/assets/characters/morgana.jpg'));
    array.push(new SoundElement('stick-up-your-th', 'Stick up your thumbs', '/assets/characters/morgana.jpg'));
    array.push(new SoundElement('silence-500', '', '/assets/characters/morgana.jpg'));
    // (so that Percival may know of you)
    array.push(new SoundElement('percival', 'Percival', '/assets/characters/percival.jpg'));
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', '/assets/characters/percival.jpg'));
    array.push(new SoundElement('silence-1000', '', '/assets/characters/percival.jpg'));
    array.push(new SoundElement('silence-1000', '', '/assets/characters/percival.jpg'));
    array.push(new SoundElement('silence-1000', '', '/assets/characters/percival.jpg'));
    // (so you may know Merlin and Morgana)
    array.push(new SoundElement('merlin-and-morga', 'Merlin and Morgana', '/assets/characters/morgana.jpg'));
    array.push(new SoundElement('put-your-thumbs', 'Put your thumbs away', '/assets/characters/morgana.jpg'));
    array.push(new SoundElement('silence-500', '', '/assets/characters/morgana.jpg'));
    array.push(new SoundElement('percival', 'Percival', '/assets/characters/percival.jpg'));
    array.push(new SoundElement('close-your-eyes', 'Close your eyes', '/assets/characters/percival.jpg'));
    array.push(new SoundElement('silence-500', '', '/assets/characters/percival.jpg'));
    // -(Thumbs down, eyes closed)
    array.push(new SoundElement('everyone', 'Everyone', '/assets/characters/loyal-servant.jpg'));
    array.push(new SoundElement('open-your-eyes', 'Open your eyes', '/assets/characters/loyal-servant.jpg'));

    return array;
  }
}
