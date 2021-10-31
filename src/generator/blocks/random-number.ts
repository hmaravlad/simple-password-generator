import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { getRandomInt } from '../../utils/random-utils.js';

export class RandomNumberBlock implements Block {
  type = BlockType.Number;

  generate(): string {
    return getRandomInt(0, 1000000).toString();
  }
}