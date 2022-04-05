const { sumPairs, sumSequenceOfPairsFibonacci } = require('../src/fibonacciSequence');

describe('2 - Desenvolva uma função que encontra a soma de todos os termos pares de uma sequencia Fibonacci abaixo de quatro milhões.', () => {
  test('Testa se a função "sumPairs" retorna soma dos números pares', () => {
    const some = sumPairs([1, 1, 3, 6, 6, 10]);
    const some2 = sumPairs([2, 1, 80, 6, 6, 10]);
    const some3 = sumPairs([2, 1, 8, 6, 6, 10]);

    expect(some).toEqual(22);
    expect(some2).toEqual(104);
    expect(some3).toEqual(32);
  });
  test('Testa se a função "sumSequenceOfPairsFibonacci" retorna a soma de todos valores pares da sequencia Fibonacci até um máximo valor informado', () => {
    const some = sumSequenceOfPairsFibonacci(90);
    const some2 = sumSequenceOfPairsFibonacci(200);
    const some3 = sumSequenceOfPairsFibonacci(4000000);

    expect(some).toEqual(44);
    expect(some2).toEqual(188);
    expect(some3).toEqual(4613732);
  });
});
