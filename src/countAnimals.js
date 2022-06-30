const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const obj = {};
  data.species.forEach((element) => {
    obj[element.name] = element.residents.length;
  });
  if (animal === undefined) {
    return obj;
  } if (animal.sex === undefined) {
    const { specie } = animal;
    return obj[specie];
  }
  const finder = data.species.find((element) => element.name === animal.specie);
  const maleOrFemale = finder.residents.filter((resident) => resident.sex === animal.sex);
  return maleOrFemale.length;
}

module.exports = countAnimals;
