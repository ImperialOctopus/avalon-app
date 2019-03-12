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

    array.push(new SoundElement('everyone', 'Everyone', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('close-your-eyes', '', ''));
    array.push(new SoundElement('silence-500', '', ''));
    // (and extend your hand into a fist in front of you)
    //   [and shut up]
    array.push(new SoundElement('minions-of-mordr', '', ''));
    // {(except Oberon)}
    array.push(new SoundElement('open-your-eyes', '', ''));
    array.push(new SoundElement('silence-1000', '', ''));
    array.push(new SoundElement('silence-1000', '', ''));
    array.push(new SoundElement('silence-1000', '', ''));
    // (and look around so that you know the other agents of Evil)
    array.push(new SoundElement('minions-of-mordr', '', ''));
    array.push(new SoundElement('close-your-eyes', '', ''));
    array.push(new SoundElement('silence-500', '', ''));
    // -(Eyes closed)
    array.push(new SoundElement('minions-of-mordr', '', ''));
    // {(not Mordred himself)}
    array.push(new SoundElement('stick-up-your-th', '', ''));
    array.push(new SoundElement('silence-500', '', ''));
    // (so that Merlin will know of you)
    array.push(new SoundElement('merlin', '', ''));
    array.push(new SoundElement('open-your-eyes', '', ''));
    array.push(new SoundElement('silence-1000', '', ''));
    array.push(new SoundElement('silence-1000', '', ''));
    array.push(new SoundElement('silence-1000', '', ''));
    // (and see the agents of evil)
    array.push(new SoundElement('minions-of-mordr', '', ''));
    array.push(new SoundElement('put-your-thumbs', '', ''));
    array.push(new SoundElement('silence-500', '', ''));
    array.push(new SoundElement('merlin', '', ''));
    array.push(new SoundElement('close-your-eyes', '', ''));
    array.push(new SoundElement('silence-500', '', ''));
    // -(Thumbs down, eyes closed)
    array.push(new SoundElement('merlin-and-morga', '', ''));
    array.push(new SoundElement('stick-up-your-th', '', ''));
    array.push(new SoundElement('silence-500', '', ''));
    // (so that Percival may know of you)
    array.push(new SoundElement('percival', '', ''));
    array.push(new SoundElement('open-your-eyes', '', ''));
    array.push(new SoundElement('silence-1000', '', ''));
    array.push(new SoundElement('silence-1000', '', ''));
    array.push(new SoundElement('silence-1000', '', ''));
    // (so you may know Merlin and Morgana)
    array.push(new SoundElement('merlin-and-morga', '', ''));
    array.push(new SoundElement('put-your-thumbs', '', ''));
    array.push(new SoundElement('silence-500', '', ''));
    array.push(new SoundElement('percival', '', ''));
    array.push(new SoundElement('close-your-eyes', '', ''));
    array.push(new SoundElement('silence-500', '', ''));
    // -(Thumbs down, eyes closed)
    array.push(new SoundElement('everyone', '', ''));
    array.push(new SoundElement('open-your-eyes', '', ''));

    return array;
  }
}
