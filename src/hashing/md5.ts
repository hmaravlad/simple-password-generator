import md5 from 'md5';

export class Md5Hasher {
  hash(str: string): string {
    return md5(str);
  }

  toCsv(strings: string[]): string {
    console.log('====================');
    console.log('Hashing with Md5');
    let result = 'hash\n';
    const divisor = 20;
    const lengthPart = strings.length / divisor;
    for (let i = 0; i < strings.length; i++) {
      const string = strings[i];
      const hashed = this.hash(string);
      result += `${hashed}\n`;
      if (i % (lengthPart) === 0) {
        console.log(`ready: ${i / lengthPart}/${divisor}`);
      }
    }
    return result;
  }
}