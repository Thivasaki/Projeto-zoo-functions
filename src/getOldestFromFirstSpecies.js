const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const fider = data.employees.find((employee) => employee.id === id);
  const responsibleForFinder = fider.responsibleFor[0];
  const animalFinder = data.species.find((animal) => animal.id === responsibleForFinder);
  const oldAn = animalFinder.residents.reduce((acc, curr) => ((acc.age < curr.age) ? curr : acc));
  return Object.values(oldAn);
}

module.exports = getOldestFromFirstSpecies;
