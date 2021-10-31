import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { getRandomInt } from '../../utils/random-utils.js';

export class RecentYearBlock implements Block {
  type = BlockType.Number;

  generate(): string {
    return getRandomInt(1970, 2022).toString();
  }
}