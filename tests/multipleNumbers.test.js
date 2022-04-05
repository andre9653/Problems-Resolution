const {
  checkIfIsMultiple,
  isMultiple,
  allMultiplesNumbers,
  checkType,
  someAll,
  addAllMultipleNumbers,
} = require('../src/multipleNumbers');

describe('1 - Desenvolva uma função que encontra a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.', () => {
  test('Função que verifica se o numero é múltiplo do valor informado.', () => {
    const checkIsMultiple = checkIfIsMultiple(3, 3);
    const checkIsNotMultiple = checkIfIsMultiple(4, 3);

    expect(checkIsMultiple).toEqual(true);
    expect(checkIsNotMultiple).toEqual(false);
  });

  test('Função que checa se o numero é múltiplo de algum dos números informados.', () => {
    const isMultipleAll = isMultiple(10, [5, 10]);
    const isMultipleOne = isMultiple(10, [5, 9]);
    const isNotMultipleAll = isMultiple(10, [3, 7]);

    expect(isMultipleAll).toEqual(true);
    expect(isMultipleOne).toEqual(true);
    expect(isNotMultipleAll).toEqual(false);
  });
  test('Função que retorna todos os números que são múltiplos de algum dos valores informados.', () => {
    const allNumbers = allMultiplesNumbers(10, [3, 5]);
    const allNumbers2 = allMultiplesNumbers(20, [3, 5]);
    const expectResult = [3, 5, 6, 9];
    const expectResult2 = [3, 5, 6, 9, 10, 12, 15, 18];

    expect(allNumbers).toEqual(expectResult);
    expect(allNumbers2).toEqual(expectResult2);
  });

  test('Função que checa se todos os valores do array são do tipo esperado', () => {
    const check = checkType([1, 2, 3], 'number');
    const check2 = checkType([1, '2', 3], 'number');
    const check3 = checkType([1, true, 3], 'number');
    const check4 = checkType([false, true, true], 'boolean');
    const check5 = checkType(['false', '2', 'Ola mundo'], 'string');

    expect(check).toEqual(true);
    expect(check2).toEqual(false);
    expect(check3).toEqual(false);
    expect(check4).toEqual(true);
    expect(check5).toEqual(true);
  });

  test('Função recebe um array de números múltiplos e retorna a soma dos mesmos', () => {
    const some = someAll([1, 2, 3]);
    expect(some).toEqual(6);
    expect(() => someAll([1, '2', 3])).toThrow('all values ​​must be of type number');
  });

  test('Função recebe um array de números múltiplos e retorna a soma dos mesmos', () => {
    expect(addAllMultipleNumbers(10, [3, 5])).toEqual(23);
    expect(addAllMultipleNumbers(100, [3, 5])).toEqual(2318);
    expect(addAllMultipleNumbers(50, [3, 5])).toEqual(543);
    expect(addAllMultipleNumbers(1000, [3, 5])).toEqual(233168);
    expect(() => addAllMultipleNumbers('a')).toThrow('Invalid Value');
  });
});
