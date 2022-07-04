const data = require('../data/zoo_data');

const { employees, species } = data;

function getSpeciesById(ident) {
  const arrayAnimalsID = [];
  const arrayAnimals = [];
  const finder = employees.find(({ firstName, lastName, id }) =>
    firstName === ident.name || lastName === ident.name || id === ident.id);
  finder.responsibleFor.forEach((animalId) => arrayAnimalsID.push(animalId));
  arrayAnimalsID.forEach((animalId) =>
    arrayAnimals.push(species.find((specie) => specie.id === animalId)));
  return arrayAnimals;
}

function identifier(ident) {
  const somerName = employees.some((employee) =>
    employee.firstName === ident.name || employee.lastName === ident.name);

  const somerId = employees.some((employee) =>
    employee.id === ident.id);

  if (somerName === true) {
    return ('This is a name');
  } if (somerId === true) {
    return ('This is a id');
  } if (somerId === false && somerName === false) {
    throw new Error('Informações inválidas');
  }
}

function ObjWithName(ident) {
  const obj = {};
  const finderName = employees.find(({ firstName, lastName }) =>
    firstName === ident.name || lastName === ident.name);
  obj.id = finderName.id;
  obj.fullName = `${finderName.firstName} ${finderName.lastName}`;
  obj.species = getSpeciesById(ident).map((specie) => specie.name);
  obj.locations = getSpeciesById(ident).map((specie) => specie.location);
  return obj;
}

function ObjWithID(ident) {
  const obj = {};
  const finderID = employees.find((employee) =>
    employee.id === ident.id);
  obj.id = finderID.id;
  obj.fullName = `${finderID.firstName} ${finderID.lastName}`;
  obj.species = getSpeciesById(ident).map((specie) => specie.name);
  obj.locations = getSpeciesById(ident).map((specie) => specie.location);
  return obj;
}

function ObjWithNothing() {
  const array = employees.map((employee) => (
    {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getSpeciesById(employee).map((specie) => specie.name),
      locations: getSpeciesById(employee).map((specie) => specie.location),
    }));
  console.log(array);
  return array;
}

function getEmployeesCoverage(ident) {
  // seu código aqui
  if (ident === undefined) {
    return ObjWithNothing();
  } if (identifier(ident) === 'This is a name') {
    return ObjWithName(ident);
  } if (identifier(ident) === 'This is a id') {
    return ObjWithID(ident);
  }
}

module.exports = getEmployeesCoverage;
