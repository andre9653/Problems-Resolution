// função que verifica se o numero é múltiplo do valor informado
const checkIfIsMultiple = (number, multiple) => {
  if (typeof number !== 'number' && typeof multiple !== 'number') throw new Error('Invalid value');
  return (number % multiple === 0);
};

// Função que checa se o numero é múltiplo de todos números informados.
const isMultiple = (number, arrayOfNumbers) => {
  if (typeof number !== 'number' || !arrayOfNumbers.length) throw new Error('Invalid value');

  return arrayOfNumbers.some((multiple) => checkIfIsMultiple(number, multiple));
};

// função que retorna todos os números que são múltiplos dos valores informados.
const allMultiplesNumbers = (number, arrayOfMultiple) => {
  if (typeof number !== 'number' || !arrayOfMultiple.length) throw new Error('Invalid value');
  const allNumbers = [];
  let actualNumber = 0;
  while (actualNumber < number - 1) {
    actualNumber += 1;
    if (isMultiple(actualNumber, arrayOfMultiple)) allNumbers.push(actualNumber);
  }
  return allNumbers;
};

// checa se todos os valores do array são do tipo esperado
// eslint-disable-next-line valid-typeof
const checkType = (array, type) => array.every((value) => typeof value === type);

// função que retorna a soma dos números do array.
const someAll = (arrayOfNumbers) => {
  if (!checkType(arrayOfNumbers, 'number')) throw new Error('all values ​​must be of type number');
  return arrayOfNumbers.reduce((some, number) => some + number);
};
// função recebe um array de números múltiplos e retorna a soma dos mesmos
const addAllMultipleNumbers = (number, arrayOfMultiple) => {
  if (typeof number !== 'number') throw new Error('Invalid Value');
  const numbersMultiple = allMultiplesNumbers(number, arrayOfMultiple);

  return someAll(numbersMultiple);
};

// Log da resolução do problema
console.log(`Soma dos números abaixo de 10 que são múltiplos de 3 e 5 é igual a: ${addAllMultipleNumbers(10, [3, 5])}`);
console.log(`Soma dos números abaixo de 10 que são múltiplos de 3 e 5 é igual a: ${addAllMultipleNumbers(1000, [3, 5])}`);

// export addAllMultipleNumbers;
module.exports = {
  checkIfIsMultiple,
  isMultiple,
  allMultiplesNumbers,
  checkType,
  someAll,
  addAllMultipleNumbers,
};
