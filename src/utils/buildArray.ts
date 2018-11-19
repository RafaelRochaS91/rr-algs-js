import faker from 'faker';

const buildNumbersArray = (length: number): number[] => {
  const array = [];
  let count: number = 0;

  while (count < length) {
    const newElement = faker.random.number();
    array.push(newElement);
    count++;
  }
  return array;
}

export default buildNumbersArray;
