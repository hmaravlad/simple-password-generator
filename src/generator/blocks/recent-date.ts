import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { getRandomInt } from '../../utils/random-utils.js';
import { Dict } from '../../types/dict.js';

export class RecentDateBlock implements Block, Dict {
  type = BlockType.Number;

  generate(): string {
    const year = getRandomInt(1970, 2022).toString();
    const month = getRandomInt(1, 13).toString().padStart(2, '0');
    const day = getRandomInt(1, 32).toString().padStart(2, '0');
    return day + month + year;
  }

  getDict(): string[] {
    const curr = new Date(1970, 1);
    const dates = [];
    while (curr.getFullYear() < 2022) {
      dates.push(`${curr.getDate().toString().padStart(2, '0')}${curr.getMonth().toString().padStart(2, '0')}${curr.getFullYear()}`);
      dates.push(`${curr.getMonth().toString().padStart(2, '0')}${curr.getDate().toString().padStart(2, '0')}${curr.getFullYear()}`);
      curr.setDate(curr.getDate() + 1);
    }
    return dates;
  }
}