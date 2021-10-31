import { Generator } from './generator/index.js';

const generator = new Generator();
const passwords = generator.generate(1000);
for (const password of passwords) {
  console.log(password);
}