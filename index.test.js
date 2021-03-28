const getFibonacciSequence = require('./index');

test('getFibonacciSequence(n) should return n numbers', () => {
    const test = (n) => {
        let fibNums = getFibonacciSequence(n);
        expect(fibNums.length).toEqual(n);
    };

    [0, 1, 2, 3, 4, 5, 90, 200].forEach((n) => test(n));
});

test('getFibonacciSequence should throw an error is the argument is negative', () => {
    expect(() => getFibonacciSequence(-1)).toThrow();
});
