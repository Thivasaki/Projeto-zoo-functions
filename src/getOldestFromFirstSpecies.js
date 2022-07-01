const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const fider = data.employees.find((employee) => employee.id === id);
  const animalFinder = fider
}

module.exports = getOldestFromFirstSpecies;
