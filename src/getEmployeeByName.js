const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  let obj = {};
  const find = ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName;
  const employeer = data.employees.find(find);
  obj = { ...employeer };
  return obj;
}

module.exports = getEmployeeByName;
