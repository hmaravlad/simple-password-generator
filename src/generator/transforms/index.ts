import { BlockType } from '../../types/block-type.js';
import { Transform } from '../../types/transform.js';
import { chooseRandomByProb } from '../../utils/random-utils.js';
import { Capitalize } from './capitalize.js';
import { CapitalizeHalf } from './capitalize-half.js';
import { Repeat } from './repeat.js';
import { Replace } from './replace.js';
import { Same } from './same.js';

export class TransformGetter {
  textTransforms = [
    { item: new Same(), p: 75 },
    { item: new Repeat(), p: 6 },
    { item: new CapitalizeHalf(), p: 3 },
    { item: new Capitalize(), p: 13 },
    { item: new Replace(), p: 3 },
  ];

  otherTransforms = [
    { item: new Same(), p: 95 },
    { item: new Repeat(), p: 5 },
  ];

  getTransform(type: BlockType): Transform {
    if (type == BlockType.Text) {
      return chooseRandomByProb(this.textTransforms);
    } else {
      return chooseRandomByProb(this.otherTransforms);
    }
  }
}