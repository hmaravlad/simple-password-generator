import { Transform } from '../../types/transform.js';

export class Replace implements Transform {
  replacements: { [key: string]: string } = {
    'a': '@',
    'for': '4',
    'i': '1',
    'o': '0',
    's': '$',
  };

  transform(str: string): string {
    return str.split('').map(char => this.replacements[char] || char ).join('');
  }
}