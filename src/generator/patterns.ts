import { Block } from './../types/block.js';
import { ArrayWithProbabilities } from './../types/random.js';
import { AdjectiveBlock } from './blocks/adjective.js';
import { DelimiterBlock } from './blocks/delimiter.js';
import { LastNameBlock } from './blocks/last-name.js';
import { NameBlock } from './blocks/name.js';
import { NounBlock } from './blocks/noun.js';
import { Pattern } from './blocks/pattern.js';
import { RandomStringBlock } from './blocks/random-str.js';
import { RecentDateBlock } from './blocks/recent-date.js';
import { RecentYearBlock } from './blocks/recent-year.js';
import { SpecialSymbolBlock } from './blocks/special.js';
import { Top1000000PasswordBlock } from './blocks/top1000000password.js';
import { Top100PasswordBlock } from './blocks/top100password.js';

export const patterns: ArrayWithProbabilities<Block> = [
  {
    item: new Top100PasswordBlock(),
    p: 5,
  },
  {
    item: new Top1000000PasswordBlock(),
    p: 50,
  },
  {
    item: new RandomStringBlock(16, 32),
    p: 5,
  },
  {
    item: new Pattern([
      new AdjectiveBlock(),
      new DelimiterBlock(),
      new NounBlock(),
      new SpecialSymbolBlock(),
    ]),
    p: 5,
  },
  {
    item: new Pattern([
      new NameBlock(),
      new RecentDateBlock(),
      new SpecialSymbolBlock(),
    ]),
    p: 5,
  },
  {
    item: new Pattern([
      new AdjectiveBlock(),
      new DelimiterBlock(),
      new NameBlock(),
    ]),
    p: 5,
  },
  {
    item: new Pattern([
      new NameBlock(),
      new RecentYearBlock(),
      new SpecialSymbolBlock(),
    ]),
    p: 5,
  },
  {
    item: new Pattern([
      new NounBlock(),
      new RecentDateBlock(),
      new SpecialSymbolBlock(),
    ]),
    p: 5,
  },
  {
    item: new Pattern([
      new LastNameBlock(),
      new SpecialSymbolBlock(),
      new RecentDateBlock(),
    ]),
    p: 5,
  },
  {
    item: new Pattern([
      new LastNameBlock(),
      new RecentYearBlock(),
      new SpecialSymbolBlock(),
    ]),
    p: 5,
  },
  {
    item: new Pattern([
      new NameBlock(),
      new DelimiterBlock(),
      new LastNameBlock(),
      new SpecialSymbolBlock(),
    ]),
    p: 5,
  },
  {
    item: new Pattern([
      new LastNameBlock(),
      new DelimiterBlock(),
      new NameBlock(),
      new RecentYearBlock(),
      new SpecialSymbolBlock(),
    ]),
    p: 5,
  },
];