module.exports = function multiply(first, second) {
  // HOW IT SHOULD LOOK LIKE SECTION
  /* const firstExact = BigInt(first);
  const secondExact = BigInt(second);
  return `${firstExact * secondExact}`; */
  
  // REVERSE CHUNKY MULTIPLYING SECTION
  const firstChunkyReversed = first.split('').reverse();
  const secondChunkyReversed = second.split('').reverse();

  const buffer = [];

  for(let i = 0; i < firstChunkyReversed.length; i++){

    for(let j = 0; j < secondChunkyReversed.length; j++) {

      const containerIndex = [i + j];

      const currProduct = firstChunkyReversed[i] * secondChunkyReversed[j];

      buffer[containerIndex] ? buffer[containerIndex] += currProduct 
      : buffer[containerIndex] = currProduct;
    }
  }

  for(let i = 0; i < buffer.length; i++) {

    const nextInd = i + 1;

    const numericalPart = buffer[i] % 10;
    const decimalShift = Math.floor(buffer[i] / 10);

    buffer[i] = numericalPart;
    
    buffer[nextInd] ? buffer[nextInd] += decimalShift
    : decimalShift ? 
    buffer[nextInd] = decimalShift : null;
  }

  const res = buffer.reverse().join('');

  return res;

}
