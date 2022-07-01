const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verificando se a função está funcionando normalmente quando o zoológico está aberto', () => {
    const actual = getOpeningHours('Tuesday', '10:00-AM');
    const actual2 = getOpeningHours('WEDNESDAY', '10:00-Am');
    const expected = 'The zoo is open';

    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected);
  });

  it('Verificando se a função está funcionando normalmente quando o zoológico está fechado', () => {
    const actual = getOpeningHours('Monday', '10:00-AM');
    const actual2 = getOpeningHours('sunday', '10:00-pm');
    const expected = 'The zoo is closed';

    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected);
  });

  it('Retorne um Erro quando não for dado como parâmetro uma hora possível ', () => {
    const actual = 'XX:XX-AM';

    expect(() => getOpeningHours('Tuesday', actual)).toThrow('The hour should represent a number');
  });

  it('Retorne um Erro quando não for dado como parâmetro uma hora em "PM" "AM"', () => {
    const actual = '10:00-XX';

    expect(() => getOpeningHours('Tuesday', actual)).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Retorne um Erro quando não for dado como parâmetro um dia da semana', () => {
    const actual = 'banana';

    expect(() => getOpeningHours(actual, '10:00-PM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Retorne um Erro quando não for dado como parâmetro uma hora ou minuto possível', () => {
    const actual = '99:00-PM';
    const actual2 = '6:99-PM';

    expect(() => getOpeningHours('Tuesday', actual)).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', actual2)).toThrow('The minutes must be between 0 and 59');
  });

  it('Retorne um Erro quando não for dado como parâmetro um dia da semana', () => {
    const expected = {
      Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 } };

    expect(getOpeningHours()).toEqual(expected);
  });
});
