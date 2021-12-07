import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandom } from '../../utils/random-utils.js';
import { StrFileParser } from '../../utils/str-file-parser.js';
import { Dict } from '../../types/dict.js';

export class NounBlock implements Block, Dict {
  type = BlockType.Text;

  words: string[];

  constructor() {
    const strFileParser = new StrFileParser();
    this.words = strFileParser.parse('./src/resources/nouns.txt');
  }

  generate(): string {
    return chooseRandom(this.words);
  }

  getDict(): string[] {
    return this.words;
  }
}