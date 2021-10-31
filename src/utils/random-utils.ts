import { randomInt } from 'crypto';
import { ArrayWithProbabilities } from 'src/types/random';
import { possibleChars } from './possible-chars.js';

// not sure if secure
export function getSecureRandomInt(a: number, b: number): number {
  if (b - a > 248) throw new Error();
  return randomInt(a, b);
}

export function getRandomInt(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a) + a);
}

export function chooseRandom<T>(arr: T[]): T {
  const i = getRandomInt(0, arr.length);
  return arr[i];
}

export function chooseRandomByProb<T>(arr: ArrayWithProbabilities<T>): T {
  const sum = arr.reduce((prev, curr) => prev + curr.p, 0);
  const n = getRandomInt(0, sum);
  let curr = 0;
  let i = 0;
  let item: T = arr[0].item;
  while (curr < n) {
    item = arr[i].item;
    const { p } = arr[i];
    curr += p;
    i += 1;
  }
  return item;
}

export function getRandomChar(): string {
  return chooseRandom(possibleChars);
}
