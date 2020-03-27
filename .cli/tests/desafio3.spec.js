var desafio = require("../utils").import("desafio3");

describe("Item 1", () => {
  it('Variavel "showNumbers" deve ser uma funcão', () => {
    expect(typeof desafio.showNumbers).toEqual("function");
  });
  it('Funcão "showNumbers" deve mostrar os valores 1,2,3,4 e 5, quando passado o número 5 como parametro', () => {
    global.console = { log: jest.fn() };
    desafio.showNumbers(5);
    expect(global.console.log.mock.calls[0][0]).toBe(1);
    expect(global.console.log.mock.calls[1][0]).toBe(2);
    expect(global.console.log.mock.calls[2][0]).toBe(3);
    expect(global.console.log.mock.calls[3][0]).toBe(4);
    expect(global.console.log.mock.calls[4][0]).toBe(5);
  });
  it('Funcão "showNumbers" deve chamar o console.log 10 vezes quando passado o número 10 como parametro', () => {
    global.console = { log: jest.fn() };
    desafio.showNumbers(10);
    expect(global.console.log.mock.calls.length).toBe(10);
  });
});

describe("Item 2", () => {
  it('Variavel "showPairNumbers" deve ser uma funcão', () => {
    expect(typeof desafio.showPairNumbers).toEqual("function");
  });
  it('Funcão "showPairNumbers" deve mostrar os valores 0,2, e 4, quando passado o número 5 como parametro', () => {
    global.console = { log: jest.fn() };
    desafio.showPairNumbers(5);
    expect(global.console.log.mock.calls[0][0]).toBe(0);
    expect(global.console.log.mock.calls[1][0]).toBe(2);
    expect(global.console.log.mock.calls[2][0]).toBe(4);
  });
  it('Funcão "showPairNumbers" deve chamar o console.log 5 vezes quando passado o número 10 como parametro', () => {
    global.console = { log: jest.fn() };
    desafio.showPairNumbers(10);
    expect(global.console.log.mock.calls.length).toBe(5);
  });
});

describe("Item 3", () => {
  it('Variavel "filterPairNumbers" deve ser uma funcão', () => {
    expect(typeof desafio.filterPairNumbers).toEqual("function");
  });
  it('Funcão "filterPairNumbers" deve retornar um array contendo o número [6], quando passado um array com os numeros [1,6,3,5,9]', () => {
    const numbers = desafio.filterPairNumbers([1, 6, 3, 5, 9]);
    expect(numbers).toEqual([6]);
  });
  it('Funcão "filterPairNumbers" deve chamar utilizar a função filter do array uma vez para retornar os itens pares', () => {
    var number = [0, 2, 4];
    spyOn(number, "filter").and.callThrough();
    desafio.filterPairNumbers(number);
    expect(number.filter).toHaveBeenCalledTimes(1);
  });
});
