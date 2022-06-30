const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined quando não houver parâmetros', () => {
    const actual = handlerElephants();

    const expected = undefined;

    expect(actual).toEqual(expected);
  });

  it('Retorna uma frase avisando que deu erro quando o parâmetro não for uma string', () => {
    const actual = handlerElephants(2);

    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(actual).toEqual(expected);
  });

  it('Retorna null quando o parâmetro for uma string que não faça parte das opções disponíveis', () => {
    const actual = handlerElephants('banana');

    const expected = null;

    expect(actual).toEqual(expected);
  });

  it('Retorna a quantidade de elefantes quando dado o parâmetro "count"', () => {
    const actual = handlerElephants('count');

    const expected = 4;

    expect(actual).toEqual(expected);
  });

  it('Retorna a um array com o nome de todos os elefantes quando dado o parâmetro "names"', () => {
    const actual = handlerElephants('names');

    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(actual).toEqual(expected);
  });

  it('Retorna a uma média da idade dos elefantes quando dado o parâmetro "averageAge"', () => {
    const actual = handlerElephants('averageAge');

    const expected = 10.5;

    expect(actual).toEqual(expected);
  });

  it('Retorna a localização dos elefantes dentro do Zoológico quando dado o parâmetro "location"', () => {
    const actual = handlerElephants('location');

    const expected = 'NW';

    expect(actual).toEqual(expected);
  });

  it('Retorna a popularidade dos elefantes quando dado o parâmetro "popularity"', () => {
    const actual = handlerElephants('popularity');

    const expected = 5;

    expect(actual).toEqual(expected);
  });

  it('Retorna um array com a relação de dias em que é possível visitar os elefantes quando dado o parâmetro "availability"', () => {
    const actual = handlerElephants('availability');

    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];

    expect(actual).toEqual(expected);
  });
});
