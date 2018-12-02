import StringReversal from './StringReversal';



describe('StringReversal interview question tests on original value', () => {
  const value = 'Something';
  const StringReversalClass = new StringReversal(value);
  const reversedValue = StringReversalClass.methodOne();

  it('MethodOne', () => {
    const methodOneResult = StringReversalClass.methodOne();
    expect(methodOneResult).toEqual(reversedValue);
  });

  it('MethodTwo', () => {
    const methodTwoResult = StringReversalClass.methodTwo();
    expect(methodTwoResult).toEqual(undefined);
  });

});
