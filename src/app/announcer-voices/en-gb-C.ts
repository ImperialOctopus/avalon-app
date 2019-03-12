import { Announcer } from '../announcer';
import * as data from '../../assets/audio/en-gb-C/output.json';

export const en_gb_C: Announcer = new Announcer(
  [
    '/assets/audio/en-gb-C/output.ogg',
    '/assets/audio/en-gb-C/output.m4a',
    '/assets/audio/en-gb-C/output.mp3',
    '/assets/audio/en-gb-C/output.ac3'
  ],
  data
);
