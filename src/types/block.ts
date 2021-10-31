import { BlockType } from './block-type';

export interface Block {
  type: BlockType
  generate(): string
}