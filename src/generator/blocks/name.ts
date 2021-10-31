import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandom } from '../../utils/random-utils.js';
import { StrFileParser } from '../../utils/str-file-parser.js';

const NAME_NUMBER = 1000;

export class NameBlock implements Block {
  type = BlockType.Text;

  names: string[];

  constructor() {
    const strFileParser = new StrFileParser();
    this.names = strFileParser.parse('./src/resources/names.txt').slice(0, NAME_NUMBER);
  }

  generate(): string {
    let name = chooseRandom(this.names);
    name = name[0].toUpperCase() + name.slice(1);
    return name;
  }
}