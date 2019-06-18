import { SoundElement } from './sound-element';

export class Announcer {
  files: Array<string>;
  spritelist: object;
  constructor(_files: Array<string>, _spritelist: object) {
    this.files = _files;
    this.spritelist = _spritelist;
  }
}
