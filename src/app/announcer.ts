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
    // (and extend your hand into a fist in front of you)
    //   [and shut up]
    array.push(new SoundElement('minions-of-mordr', '', ''));
    // {(except Oberon)}
    array.push(new SoundElement('open-your-eyes', '', ''));
    // (and look around so that you know the other agents of Evil)
    array.push(new SoundElement('minions-of-mordr', '', ''));
    array.push(new SoundElement('close-your-eyes', '', ''));
    // -(Eyes closed)
    array.push(new SoundElement('minions-of-mordr', '', ''));
    // {(not Mordred himself)}
    array.push(new SoundElement('stick-up-your-th', '', ''));
    // (so that Merlin will know of you)
    array.push(new SoundElement('merlin', '', ''));
    array.push(new SoundElement('open-your-eyes', '', ''));
    // (and see the agents of evil)
    array.push(new SoundElement('minions-of-mordr', '', ''));
    array.push(new SoundElement('put-your-thumbs', '', ''));
    array.push(new SoundElement('merlin', '', ''));
    array.push(new SoundElement('close-your-eyes', '', ''));
    // -(Thumbs down, eyes closed)
    array.push(new SoundElement('merlin-and-morga', '', ''));
    array.push(new SoundElement('stick-up-your-th', '', ''));
    // (so that Percival may know of you)
    array.push(new SoundElement('percival', '', ''));
    array.push(new SoundElement('open-your-eyes', '', ''));
    // (so you may know Merlin and Morgana)
    array.push(new SoundElement('merlin-and-morga', '', ''));
    array.push(new SoundElement('put-your-thumbs', '', ''));
    array.push(new SoundElement('percival', '', ''));
    array.push(new SoundElement('close-your-eyes', '', ''));
    // -(Thumbs down, eyes closed)
    array.push(new SoundElement('everyone', '', ''));
    array.push(new SoundElement('open-your-eyes', '', ''));

    return array;
  }
}
