import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandomByProb } from '../../utils/random-utils.js';

export class DelimiterBlock implements Block {
  type = BlockType.Text;

  private delimiters = [
    { item: '', p: 80 }, 
    { item: '_', p: 10 }, 
    { item: '.', p: 6 }, 
    { item: '-', p: 4 },
  ];

  generate(): string {
    return chooseRandomByProb(this.delimiters);
  }
}