import { Transform } from '../../types/transform.js';

export class Repeat implements Transform {
  transform(str: string): string {
    return str + str;
  }
}