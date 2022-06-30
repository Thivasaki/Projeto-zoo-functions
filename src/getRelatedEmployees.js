const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const filter = data.employees.filter((employee) => employee.managers.includes(managerId));
  const array = filter.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  if (isManager(managerId) === true) return array;
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
