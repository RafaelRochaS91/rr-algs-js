// Step 1 − If it is the first element, it is already sorted. return 1;
// Step 2 − Pick next element
// Step 3 − Compare with all elements in the sorted sub-list
// Step 4 − Shift all the elements in the sorted sub-list that is greater than the
//          value to be sorted
// Step 5 − Insert the value
// Step 6 − Repeat until list is sorted


/**
 * @description Using InsertSort Complexity of Algorithn: O(n*2) -- Incremental Approach
 * @param array
 */
export const insertSortNumbers = (array: number[]): number[] => {
  let length = array.length;

  for (let i = 0; i < length; ++i) {
    let key: number = array[i];
    let newPosition: number = i - 1;

    while (newPosition >= 0 && array[newPosition] > key) {
      array[newPosition + 1] = array[newPosition];
      newPosition = newPosition - 1;
    }
    array[newPosition + 1] = key;
  }

  return array;
}
