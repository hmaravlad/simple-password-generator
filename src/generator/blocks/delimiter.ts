import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandomByProb } from '../../utils/random-utils.js';
import { Dict } from '../../types/dict.js';

export class DelimiterBlock implements Block, Dict {
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

  getDict(): string[] {
    return this.delimiters.map(del => del.item);
  }
}