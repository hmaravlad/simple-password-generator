import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandom } from '../../utils/random-utils.js';
import { StrFileParser } from '../../utils/str-file-parser.js';

export class AdjectiveBlock implements Block {
  type = BlockType.Text;

  words: string[];

  constructor() {
    const strFileParser = new StrFileParser();
    this.words = strFileParser.parse('./src/resources/adjectives.txt');
  }

  generate(): string {
    return chooseRandom(this.words);
  }
}