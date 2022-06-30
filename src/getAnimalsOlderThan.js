const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const finder = (spec) => spec.name === animal;
  const every = (resident) => resident.age >= age;
  return data.species.find(finder).residents.every(every);
}

module.exports = getAnimalsOlderThan;
