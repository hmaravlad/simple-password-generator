import { getRandomInt } from '../../utils/random-utils.js';
import { Transform } from '../../types/transform.js';

export class CapitalizeHalf implements Transform {
  transform(str: string): string {
    const j = getRandomInt(0, 2);
    let res = '';
    for (let i = 0; i < str.length; i++) {
      if ((i + j) % 2 === 0) {
        res += str[i].toUpperCase();
      } else {
        res += str[i].toLowerCase();
      }
    }
    return res;
  }
}