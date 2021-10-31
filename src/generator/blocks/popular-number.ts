import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandom } from '../../utils/random-utils.js';
import { StrFileParser } from '../../utils/str-file-parser.js';

export class PopularNumberBlock implements Block {
  type = BlockType.Number;

  number: string[];

  constructor() {
    const strFileParser = new StrFileParser();
    this.number = strFileParser.parse('./src/resources/popular-numbers.txt');
  }

  generate(): string {
    return chooseRandom(this.number);
  }
}