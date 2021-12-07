import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { getRandomInt } from '../../utils/random-utils.js';
import { Dict } from '../../types/dict.js';

export class RecentYearBlock implements Block, Dict {
  type = BlockType.Number;

  generate(): string {
    return getRandomInt(1970, 2022).toString();
  }

  getDict(): string[] {
    const years = [];
    for (let i = 1970; i <= 2022; i++) {
      years.push(i.toString());
    }
    return years;
  }
}