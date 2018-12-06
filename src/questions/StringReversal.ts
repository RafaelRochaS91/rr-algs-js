export default class StringReversal {
  value = '';
  constructor(value: string) {
    this.value = value;
  }

  methodOne() {
    const { value } = this;
    const valueToArray = value.split('');

    return valueToArray.reverse().join('');
  }

  methodTwo() {
    const { value } = this;
    let reversedString = '';

    for (let char of value) {
      reversedString = char + reversedString;
    }

    return reversedString;
  }

  methodThree() {
    const { value } = this;
    return value.split('').reduce((prev, current) => current + prev, '');
  }
}
