import { chooseRandomByProb } from '../utils/random-utils.js';
import { patterns } from './patterns.js';

export class Generator {
  generate(n: number): string[] {
    const results = [];
    for (let i = 0; i < n; i++) {
      const pattern = chooseRandomByProb(patterns);
      results.push(pattern.generate()); 
    }
    
    return results;
  }
}