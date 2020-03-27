var desafio = require('../utils').import('desafio1');

describe('Item 1', () => {
  it('Variavel "name" deve ser uma string', () => {
    expect(typeof desafio.name).toEqual('string');
  });
  it('Variavel "name" deve ser atribuida como "Anderson"', () => {
    expect(desafio.name).toEqual('Anderson');
  });
});

describe('Item 2', () => {
  it('Variavel "sum" deve ser um numero', () => {
    expect(typeof desafio.sum).toEqual('number');
  });
  it('Variavel "sum" deve ser definida como o resultado da soma de 15 + 8', () => {
    expect(desafio.sum).toEqual(23);
  });
});

describe('Item 3', () => {
  it('Variavel "numbers" deve ser um array', () => {
    expect(Array.isArray(desafio.numbers)).toBeTruthy();
  });
  it('Variavel "numbers" deve ser um array com os itens [1, 5, 10]', () => {
    expect(desafio.numbers).toEqual([1, 5, 10]);
  });
});

describe('Item 4', () => {
  it('Variavel "isBeautiful" deve ser um boolean', () => {
    expect(typeof desafio.isBeautiful).toEqual('boolean');
  });
  it('Variavel "isBeautiful" deve ser true', () => {
    expect(desafio.isBeautiful).toBeTruthy();
  });
});
