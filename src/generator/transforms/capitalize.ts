import { Transform } from '../../types/transform.js';

export class Capitalize implements Transform {
  transform(str: string): string {
    if (!str[0]) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
}