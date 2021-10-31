import { Block } from '../../types/block.js';
import { BlockType } from '../../types/block-type.js';
import { chooseRandom } from '../../utils/random-utils.js';

export class SpecialSymbolBlock implements Block {
  type = BlockType.Text;

  private specialSymbols = ['!', '?', '.', '$', '@', '%'];

  generate(): string {
    return chooseRandom(this.specialSymbols);
  }
}