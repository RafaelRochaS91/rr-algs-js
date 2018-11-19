import { buildArray } from './utils';
import { insertSortNumbers } from './algs';

const originalArray = buildArray(10);
console.log(`The original pre-sorted array: ${originalArray}`);

const sortedArray: number[] = insertSortNumbers(originalArray);
console.log(`The sorted array: ${sortedArray}`);
