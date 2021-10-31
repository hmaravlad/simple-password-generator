import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { getRandomInt } from '../../utils/random-utils.js';

export class RecentDateBlock implements Block {
  type = BlockType.Number;

  generate(): string {
    const year = getRandomInt(1970, 2022).toString();
    const month = getRandomInt(1, 13).toString().padStart(2, '0');
    const day = getRandomInt(1, 32).toString().padStart(2, '0');
    return day + month + year;
  }
}