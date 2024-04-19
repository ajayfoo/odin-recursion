function getNFibonacciSequenceIteratively(n) {
  const sequence = [];
  if (n <= 0) return sequence;
  let a = 0;
  sequence.push(a);
  if (n === 1) return sequence;
  let b = 1;
  sequence.push(b);
  if (n === 2) return sequence;
  for (let i = 3; i <= n; i += 1) {
    const c = a + b;
    sequence.push(c);
    a = b;
    b = c;
  }
  return sequence;
}

function getNFibonacciSequenceRecursively(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const seq = getNFibonacciSequenceRecursively(n - 1);
  a = seq[seq.length - 2];
  b = seq[seq.length - 1];
  seq.push(a + b);
  return seq;
}

const testGetNFibonacciSequenceIteratively = () => {
  console.log(getNFibonacciSequenceIteratively(-13));
  console.log(getNFibonacciSequenceIteratively(1));
  console.log(getNFibonacciSequenceIteratively(2));
  console.log(getNFibonacciSequenceIteratively(3));
  console.log(getNFibonacciSequenceIteratively(8));
};

const testGetNFibonacciSequenceRecursively = () => {
  console.log(getNFibonacciSequenceRecursively(-13));
  console.log(getNFibonacciSequenceRecursively(1));
  console.log(getNFibonacciSequenceRecursively(2));
  console.log(getNFibonacciSequenceRecursively(3));
  console.log(getNFibonacciSequenceRecursively(8));
};

testGetNFibonacciSequenceIteratively();
testGetNFibonacciSequenceRecursively();
