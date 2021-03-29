var getFibonacciSequence = (nums) => {
    if (nums < 0) { throw new Error("nums is negative"); }
    if (nums === 0) { return []; }
    var fibA = 0, fibB = 1;
    if (nums === 1) { return [fibA]; }
    var fibNums = [fibA, fibB];
    for (var i = 2; i < nums; i++) { var tmpFib = fibA + fibB; fibNums.push(tmpFib); fibA = fibB; fibB = tmpFib; }
    return fibNums;
};

var numbersToGet = 10;
var fibSequence = getFibonacciSequence(numbersToGet);
var outStr = `The first ${numbersToGet} fibonacci numbers are: `;
fibSequence.forEach((fib, idx) =>outStr += `${fib}${idx < fibSequence.length - 1 ? ", " : ""}`);
console.log(outStr);

module.exports = getFibonacciSequence;
