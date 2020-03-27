var desafio = require("../utils").import("desafio5");

describe("Item 1", () => {
  it('Variavel "ingredientsFilter" deve ser uma funcão', () => {
    expect(typeof desafio.ingredientsFilter).toEqual("function");
  });
  it('Funcão "ingredientsFilter" deve retornar "Encontrado" quando passado "Queijo" como argumento', () => {
    expect(desafio.ingredientsFilter("Queijo")).toBe("Encontrado");
  });
  it('Funcão "ingredientsFilter" deve retornar "Encontrado" quando passado "queijo" como argumento', () => {
    expect(desafio.ingredientsFilter("queijo")).toBe("Encontrado");
  });
  it('Funcão "ingredientsFilter" deve retornar "Não Encontrado" quando passado "Tamarindo" como argumento', () => {
    expect(desafio.ingredientsFilter("Tamarindo")).toBe("Não Encontrado");
  });
});
