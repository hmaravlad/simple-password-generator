import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandom } from '../../utils/random-utils.js';
import { StrFileParser } from '../../utils/str-file-parser.js';
import { Dict } from '../../types/dict.js';

const LAST_NAME_NUMBER = 1000;

export class LastNameBlock implements Block, Dict {
  type = BlockType.Text;

  lastNames: string[];

  constructor() {
    const strFileParser = new StrFileParser();
    this.lastNames = strFileParser.parse('./src/resources/last-names-less.txt').slice(0, LAST_NAME_NUMBER);
  }

  generate(): string {
    return chooseRandom(this.lastNames);
  }

  getDict(): string[] {
    return this.lastNames;
  }
}