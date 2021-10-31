import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandom } from '../../utils/random-utils.js';
import { StrFileParser } from '../../utils/str-file-parser.js';

export class Top100PasswordBlock implements Block {
  type = BlockType.Text;

  passwords: string[];

  constructor() {
    const strFileParser = new StrFileParser();
    this.passwords = strFileParser.parse('./src/common-credentials/10-million-password-list-top-100.txt');
  }

  generate(): string {
    return chooseRandom(this.passwords);
  }
}