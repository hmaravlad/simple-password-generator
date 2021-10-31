import { Transform } from '../../types/transform.js';

export class Same implements Transform {
  transform(str: string): string {
    return str;
  }
}