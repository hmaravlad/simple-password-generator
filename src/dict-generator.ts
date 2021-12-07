/* eslint-disable @typescript-eslint/no-unused-vars */
import { AdjectiveBlock } from './generator/blocks/adjective.js';
import { DelimiterBlock } from './generator/blocks/delimiter.js';
import { LastNameBlock } from './generator/blocks/last-name.js';
import { NameBlock } from './generator/blocks/name.js';
import { NounBlock } from './generator/blocks/noun.js';
import { RecentDateBlock } from './generator/blocks/recent-date.js';
import { RecentYearBlock } from './generator/blocks/recent-year.js';
import { AdverbBlock } from './generator/blocks/adverb.js';
import { Same } from './generator/transforms/same.js';
import { Capitalize } from './generator/transforms/capitalize.js';
import { Replace } from './generator/transforms/replace.js';
import { Transform } from './types/transform.js';

import { createWriteStream } from 'fs';
import { once } from 'events';

const writeStream = createWriteStream('./cracking/dict.txt');

const dicts: string[][] = [
  //new NameBlock().getDict(),
  //new LastNameBlock().getDict(),
  new AdjectiveBlock().getDict(),
  new NounBlock().getDict(),
  new AdverbBlock().getDict(),
];

const delimiters: string[] = new DelimiterBlock().getDict();

const transforms: Transform[] = [
  new Same(),
  new Replace(),
];

(async () => {
  for (const transform1 of transforms) {
    for (const transform2 of transforms) {
      for (const delimiter of delimiters) {
        for (const dict1 of dicts) {
          for (const dict2 of dicts) {
            if (dict1 == dict2) continue;
            let words = [];
            for (const word1 of dict1) {
              for (const word2 of dict2) {
                words.push(transform1.transform(word1) + delimiter + transform2.transform(word2));
                if (words.length > 1000) {
                  const success = writeStream.write(words.join('\n'));
                  words = [];  
                  if (!success) await once(writeStream, 'drain');
                }
              }
            }
            const success = writeStream.write(words.join('\n'));
            if (!success) await once(writeStream, 'drain');
          }
        }    
      }
    }
  }
  writeStream.end();  
})();


