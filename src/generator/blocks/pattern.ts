import { Block } from '../../types/block';
import { BlockType } from '../../types/block-type.js';
import { TransformGetter } from '../transforms/index.js';

export class Pattern implements Block {
  transformGetter = new TransformGetter();

  type = BlockType.Another;

  constructor(private blocks: Block[]) {}

  generate(): string {
    return this.blocks.reduce((prev, curr) => {
      const transform = this.transformGetter.getTransform(curr.type);
      return prev + transform.transform(curr.generate());
    }, '');
  }
}