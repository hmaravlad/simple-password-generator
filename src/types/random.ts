// not sure if it's right to call this probability
export interface ItemWithProbability<T> {
  item: T
  p: number
}

export type ArrayWithProbabilities<T> = ItemWithProbability<T>[];
