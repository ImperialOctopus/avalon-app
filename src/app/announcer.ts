import { SoundElement } from './sound-element';

export class Announcer {
  files: Array<string>;
  spritelist: object;
  script: Array<SoundElement>;

  constructor(_files: Array<string>, _spritelist: object, _settings: object) {
    this.files = _files;
    this.spritelist = _spritelist;
    this.script = this.loadScript(_settings);
  }

  private loadScript(settings: object): Array<SoundElement> {
    let array: Array<SoundElement>;

    array.push(new SoundElement('merlin', 'Merlin', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('close-your-eyes', 'Close your eyes', '/assets/characters/merlin.jpg'));
    array.push(new SoundElement('and-shut-up', 'And shut up!', '/assets/characters/merlin.jpg'));

    return array;
  }
}
