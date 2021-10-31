import { readFileSync } from 'fs';

export class StrFileParser {
  parse(fileName: string): string[] {
    const full = readFileSync(fileName, 'utf-8');
    return full
      .split('\n')
      .map(str => str
        .trim()
        .toLowerCase(),
      );
  }
}