module.exports = function multiply(first, second) {
  let arrayOfNumbers = [];
  let operationResult = 0;
  let inMind = 0;

  return mult(first, second).reduce((a, b) => addition(a, b)).join('');

  function mult() {
    let addZero = "";
    let j = second.length - 1;

    while (j >= 0) {

      if (j < second.length - 1) {
        arrayOfNumbers.unshift(addZero);
      }

      for (let i = first.length - 1; i >= 0; i--) {
        operationResult = String(parseInt(first[i]) * parseInt(second[j]) + parseInt(inMind));

        if (operationResult.length === 1 || i === 0) {
          inMind = 0;
          arrayOfNumbers.unshift(operationResult);

        } else {
          inMind = operationResult[0];
          arrayOfNumbers.unshift(operationResult[1]);
        }
      }

      arrayOfNumbers.unshift(' ');
      j--;
      addZero += "0";
    }

    return arrayOfNumbers.join('').split(' ').filter(element => element !== "");
  }

  function addition(a, b) {
    let j = b.length - 1;
    let total = [];

    for (let i = a.length - 1; i >= 0; i--) {
      operationResult = String( parseInt(a[i]) + parseInt(b[j]) + parseInt(inMind) );

      if (b[j] === undefined) {
        operationResult = String( parseInt(a[i]) + parseInt(inMind) );
      }
      if (operationResult.length === 1 || i === 0) {
        inMind = 0;
        total.unshift(operationResult);
      } else {
        inMind = operationResult[0];
        total.unshift(operationResult[1]);
      }
      j--;
    }
    return total;
  }
}
