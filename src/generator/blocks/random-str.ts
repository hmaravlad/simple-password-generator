import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { getRandomChar, getRandomInt } from '../../utils/random-utils.js';

export class RandomStringBlock implements Block {
  type = BlockType.Another;

  constructor(private minLength: number, private maxLength: number) {}

  generate(): string {
    const length = getRandomInt(this.minLength, this.maxLength + 1);

    let result = '';

    for (let i = 0; i < length; i++) {
      result += getRandomChar();
    }
    
    return result;
  }
}