import bcrypt from 'bcrypt';

export class BcryptHasher {
  hash(str: string, salt: string): string {
    return bcrypt.hashSync(str, salt);
  }

  toCsv(strings: string[]): string {
    console.log('====================');
    console.log('Hashing with Bcrypt');
    let result = 'hash,salt\n';
    const divisor = 20;
    const lengthPart = strings.length / divisor;
    for (let i = 0; i < strings.length; i++) {
      const string = strings[i];
      const salt = bcrypt.genSaltSync(8);
      const hashed = this.hash(string, salt);
      result += `${hashed},${salt}\n`;
      if (i % (lengthPart) === 0) {
        console.log(`ready: ${i / lengthPart}/${divisor}`);
      }
    }
    return result;
  }
}