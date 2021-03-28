const getFibonacciSequence = (nums) => {
  if(nums < 0 ) throw(new Error('nums is negative'));
  if(nums === 0 ) return [];
  let fibA = 0, fibB = 1;
  if (nums === 1) return [fibA];
  const fibNums = [fibA, fibB];
  for (let i = 2; i < nums; i++) {
    const tmpFib = fibA + fibB;
    fibNums.push(tmpFib);
    fibA = fibB;
    fibB = tmpFib;
  }
  return fibNums;
};

const numbersToGet = 2;
const fibSequence = getFibonacciSequence(numbersToGet);
let outStr = `The first ${numbersToGet} fibonacci numbers are: `;
fibSequence.forEach(
  (fib, idx) => (outStr += `${fib}${idx < fibSequence.length - 1 ? ", " : ""}`)
);
console.log(outStr);

module.exports = getFibonacciSequence;