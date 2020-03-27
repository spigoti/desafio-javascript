var desafio = require('../utils').import('desafio4');

describe('Item 1', () => {
  it('Variavel "invertWord" deve ser uma funcão', () => {
    expect(typeof desafio.invertWord).toEqual('function');
  });
  it('Funcão "invertWord" deve retornar "anaj" quando passado "jana" como argumento', () => {
    expect(desafio.invertWord('jana')).toBe('anaj');
  });
  it('Funcão "invertWord" deve inverter a disposição das letras da palavra passada como argumento', () => {
    expect(desafio.invertWord('Michalski')).toBe('ikslahciM');
  });
});

describe('Item 2', () => {
  it('Variavel "isPalindrome" deve ser uma funcão', () => {
    expect(typeof desafio.isPalindrome).toEqual('function');
  });
  it('Funcão "isPalindrome" deve retornar "true" quando passado "ana" como argumento', () => {
    expect(desafio.isPalindrome('ana')).toBeTruthy();
  });
  it('Funcão "isPalindrome" deve retornar "true" quando a palavra passada como argumento for um palindromo', () => {
    expect(desafio.isPalindrome('radar')).toBeTruthy();
  });
  it('Funcão "isPalindrome" deve retornar "false" quando a palavra passada como argumento não for um palindromo', () => {
    expect(desafio.isPalindrome('jana')).toBeFalsy();
  });
});

describe('Item 3', () => {
  it('Variavel "fruits" deve ser uma funcão', () => {
    expect(typeof desafio.fruits).toEqual('function');
  });
  it('Funcão "fruits" deve usar push, shift e unshift', () => {
    var fruits = ['maça', 'banana'];
    spyOn(fruits, 'push').and.callThrough();
    spyOn(fruits, 'shift').and.callThrough();
    spyOn(fruits, 'unshift').and.callThrough();

    desafio.fruits(fruits);

    expect(fruits.push).toHaveBeenCalledTimes(1);
    expect(fruits.shift).toHaveBeenCalledTimes(1);
    expect(fruits.unshift).toHaveBeenCalledTimes(1);
  });
  it('Funcão "fruits" deve retornar ["goiaba", "banana", "kiwi"] quando o array passado for ["maça", "banana"]', () => {
    expect(desafio.fruits(['maça', 'banana'])).toEqual([
      'goiaba',
      'banana',
      'kiwi'
    ]);
  });
});
