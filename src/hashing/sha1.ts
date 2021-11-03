import sha1 from 'sha1';
import bcrypt from 'bcrypt';

export class Sha1Hasher {
  hash(str: string, salt: string): string {
    return sha1(str + salt);
  }

  toCsv(strings: string[]): string {
    console.log('====================');
    console.log('Hashing with Sha1');
    let result = 'hash,salt\n';
    const divisor = 20;
    const lengthPart = strings.length / divisor;
    for (let i = 0; i < strings.length; i++) {
      const string = strings[i];
      const salt = bcrypt.genSaltSync(8).slice(7);
      const hashed = this.hash(string, salt);
      result += `${hashed},${salt}\n`;
      if (i % (lengthPart) === 0) {
        console.log(`ready: ${i / lengthPart}/${divisor}`);
      }
    }
    return result;
  }
}