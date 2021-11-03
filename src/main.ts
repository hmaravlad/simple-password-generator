import { writeFileSync } from 'fs';
import { Generator } from './generator/index.js';
import { BcryptHasher } from './hashing/bcrypt.js';
import { Md5Hasher } from './hashing/md5.js';
import { Sha1Hasher } from './hashing/sha1.js';

const generator = new Generator();

const md5passwords = generator.generate(1000000);
const md5passwordsCsv = 'password\n' + md5passwords.join('\n');
const md5Csv = new Md5Hasher().toCsv(md5passwords);

writeFileSync('./results/plaintext/md5.csv', md5passwordsCsv);
writeFileSync('./results/hash/md5.csv', md5Csv);

const sha1passwords = generator.generate(1000000);
const sha1passwordsCsv = 'password\n' + sha1passwords.join('\n');
const sha1Csv = new Sha1Hasher().toCsv(sha1passwords);

writeFileSync('./results/plaintext/sha1.csv', sha1passwordsCsv);
writeFileSync('./results/hash/sha1.csv', sha1Csv);

const bcryptPasswords = generator.generate(100000);
const bcryptPasswordsCsv = 'password\n' + bcryptPasswords.join('\n');
const bcryptCsv = new BcryptHasher().toCsv(bcryptPasswords);

writeFileSync('./results/plaintext/bcrypt.csv', bcryptPasswordsCsv);
writeFileSync('./results/hash/bcrypt.csv', bcryptCsv);
