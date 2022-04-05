const MAX_NUMBER = 4000000;

/* função recebe um array, faz uma primeira verificação se o numero
    é par e retorna a soma dos mesmos */
const sumPairs = (array) => array
  .reduce((some, number) => (number % 2 === 0 ? some + number : some), 0);

// função que cria um array com os números da sequencia Fibonacci e retorna a soma dos números pares
const sumSequenceOfPairsFibonacci = (maxNumber) => {
  let number = 3;
  const arrayOfNumbers = [1, 2, 3];
  while (number < maxNumber) {
    const arrayReverse = arrayOfNumbers.sort((a, b) => a - b).reverse();
    number = arrayReverse[0] + arrayOfNumbers[1];
    if (number > maxNumber) break;
    arrayOfNumbers.push(number);
  }

  return sumPairs(arrayOfNumbers);
};

console.log(`A soma de todos os valores da sequencia Fibonacci menores que ${MAX_NUMBER} é ${sumSequenceOfPairsFibonacci(MAX_NUMBER)}.`);

module.exports = {
  sumPairs,
  sumSequenceOfPairsFibonacci,
};
