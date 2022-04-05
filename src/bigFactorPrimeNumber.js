// verifica se o numero passado por parâmetro é primo
const isPrime = (num) => {
  let prime = 0;
  for (let index = 1; index <= num; index += 1) {
    if (num % index === 0) {
      prime += 1;
    }
  }
  return prime === 2;
};

// Retorna maior numero fator primo
const bigFactorPrime = (number) => {
  let bigNumber = 0;
  for (let index = 0; index <= number; index += 1) {
    if (number % index === 0 && isPrime(index)) bigNumber = index;
  }
  return bigNumber;
};

console.log(bigFactorPrime(13195));
