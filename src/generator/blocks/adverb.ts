import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandom } from '../../utils/random-utils.js';
import { StrFileParser } from '../../utils/str-file-parser.js';
import { Dict } from '../../types/dict.js';

export class AdverbBlock implements Block, Dict {
  type = BlockType.Text;

  adverbs: string[];

  constructor() {
    const strFileParser = new StrFileParser();
    this.adverbs = strFileParser.parse('./src/resources/adverbs.txt');
  }

  generate(): string {
    return chooseRandom(this.adverbs);
  }

  getDict(): string[] {
    return this.adverbs;
  }
}