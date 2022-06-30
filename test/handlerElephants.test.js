const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes quando dado o parâmetro count', () => {
    const actual = handlerElephants('count');

    const expected = 4;

    expect(actual).toEqual(expected);
  });
});
