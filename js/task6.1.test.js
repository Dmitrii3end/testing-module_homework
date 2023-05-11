const reverseString = require('./task6.1');

test('tests for revertString function', () => {
    expect(reverseString("abc")).toBe("cba");
});