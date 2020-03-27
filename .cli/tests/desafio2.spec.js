var desafio = require("../utils").import("desafio2");

describe("Item 1", () => {
  it('Variavel "sum" deve ser uma funcão', () => {
    expect(typeof desafio.sum).toEqual("function");
  });
  it('Funcão "sum" deve receber 2 parametros', () => {
    expect(desafio.fullname.length).toEqual(2);
  });
  it('Funcão "sum" deve retornar a soma de dois numeros aleatorios que forem passados por parametro', () => {
    var param1 = Math.random();
    var param2 = Math.random();
    expect(desafio.sum(param1, param2)).toEqual(param1 + param2);
  });
  it('Funcão "sum" deve retornar "2" ao serem passados os parametros (1, 1)', () => {
    expect(desafio.sum(1, 1)).toEqual(2);
  });
  it('Funcão "sum" deve retornar "2341" ao serem passados os parametros (1998, 343)', () => {
    expect(desafio.sum(1998, 343)).toEqual(2341);
  });
});

describe("Item 2", () => {
  it('Variavel "fullname" deve ser uma funcão', () => {
    expect(typeof desafio.fullname).toEqual("function");
  });
  it('Funcão "fullname" deve receber 2 parametros', () => {
    expect(desafio.fullname.length).toEqual(2);
  });
  it('Funcão "fullname" deve retornar a juncão dos dois parametros passados, separados um espaco', () => {
    expect(desafio.fullname("Anderson", "Silva")).toEqual("Anderson Silva");
  });
  it('Funcão "fullname" deve retornar "Gabriel Michalski" ao serem passados os parametros ("Gabriel", "Michalski")', () => {
    expect(desafio.fullname("Gabriel", "Michalski")).toEqual(
      "Gabriel Michalski"
    );
  });
});

describe("Item 3", () => {
  it('Variavel "calculate" deve ser uma funcão', () => {
    expect(typeof desafio.calculate).toEqual("function");
  });
  it('Funcão "calculate" deve receber 3 parametros', () => {
    expect(desafio.calculate.length).toEqual(3);
  });
  it('Funcão "calculate" deve retornar "Preencha todos os valores corretamente!" se algum dos parametros não for passado ou estiver vazio', () => {
    expect(desafio.calculate(1)).toEqual(
      "Preencha todos os valores corretamente!"
    );
    expect(desafio.calculate(null)).toEqual(
      "Preencha todos os valores corretamente!"
    );
  });
  it('Funcão "calculate" deve retornar 5 ao serem passados os parametros (1, 1, 1) ', () => {
    expect(desafio.calculate(1, 1, 1)).toEqual(3);
  });
  it('Funcão "calculate" deve retornar a multiplicacão dos três parametros passados, somado de 2', () => {
    var param1 = Math.random();
    var param2 = Math.random();
    var param3 = Math.random();
    expect(desafio.calculate(param1, param2, param3)).toEqual(
      param1 * param2 * param3 + 2
    );
  });
});

describe("Item 4", () => {
  it('Variavel "calculatev2" deve ser uma funcão', () => {
    expect(typeof desafio.calculatev2).toEqual("function");
  });
  it('Funcão "calculatev2" deve receber 3 parametros', () => {
    expect(desafio.calculatev2.length).toEqual(3);
  });
  it('Funcão "calculatev2" deve retornar "false" se nenhum dos parametros for passados', () => {
    expect(desafio.calculatev2()).toBe(false);
    expect(desafio.calculatev2(null)).toBe(false);
  });
  it('Funcão "calculatev2" deve retornar 5 ao ser passado somente um parametro (5) ', () => {
    expect(desafio.calculatev2(5)).toEqual(5);
  });
  it('Funcão "calculatev2" deve retornar 15 ao serem passados os parametros (5, 10) ', () => {
    expect(desafio.calculatev2(5, 10)).toEqual(15);
  });
  it('Funcão "calculatev2" deve retornar 5 ao serem passados os parametros (5, 10, 3) ', () => {
    expect(desafio.calculatev2(5, 10, 3)).toEqual(5);
  });
});

describe("Item 5", () => {
  it('Variavel "isPair" deve ser uma funcão', () => {
    expect(typeof desafio.isPair).toEqual("function");
  });
  it('Funcão "isPair" deve receber 1 parametro', () => {
    expect(desafio.isPair.length).toEqual(1);
  });
  it('Funcão "isPair" deve retornar "false" se um valor impar for passado', () => {
    expect(desafio.isPair(3)).toBe(false);
    expect(desafio.isPair(33)).toBe(false);
    expect(desafio.isPair(3125)).toBe(false);
  });
  it('Funcão "isPair" deve retornar "true" se um valor par for passado', () => {
    expect(desafio.isPair(4)).toBe(true);
    expect(desafio.isPair(30)).toBe(true);
    expect(desafio.isPair(1324)).toBe(true);
  });
});
