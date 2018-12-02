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

  }
}
