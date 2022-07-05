const data = require('../data/zoo_data');

function defaultList(param) {
  const chave = param;
  chave.NE = data.species.filter((specie) =>
    specie.location === 'NE').map((specie) => specie.name);
  chave.NW = data.species.filter((specie) =>
    specie.location === 'NW').map((specie) => specie.name);
  chave.SE = data.species.filter((specie) =>
    specie.location === 'SE').map((specie) => specie.name);
  chave.SW = data.species.filter((specie) =>
    specie.location === 'SW').map((specie) => specie.name);
}

function SorteOption(param) {
  const chave = param;
  chave.NE.forEach((animalObj) => Object.values(animalObj)[0].sort());
  chave.NW.forEach((animalObj) => Object.values(animalObj)[0].sort());
  chave.SE.forEach((animalObj) => Object.values(animalObj)[0].sort());
  chave.SW.forEach((animalObj) => Object.values(animalObj)[0].sort());
}

function IncludeNamesFunc(param, sorted) {
  const chave = param;
  chave.NE = chave.NE.map((animal) => ({
    [animal]: data.species.find((specie) => specie.name === animal).residents.map((resident) =>
      resident.name) }));
  chave.NW = chave.NW.map((animal) => ({
    [animal]: data.species.find((specie) => specie.name === animal).residents.map((resident) =>
      resident.name) }));
  chave.SE = chave.SE.map((animal) => ({
    [animal]: data.species.find((specie) => specie.name === animal).residents.map((resident) =>
      resident.name) }));
  chave.SW = chave.SW.map((animal) => ({
    [animal]: data.species.find((specie) => specie.name === animal).residents.map((resident) =>
      resident.name) }));
  if (sorted === true) {
    SorteOption(param);
  }
}

function FilterBySex(param, sex) {
  const chave = param;
  chave.NE = chave.NE.map((animal) => ({
    [animal]: data.species.find((specie) =>
      specie.name === animal).residents.filter((res) => res.sex === sex).map((res) => res.name),
  }));
  chave.NW = chave.NW.map((animal) => ({
    [animal]: data.species.find((specie) =>
      specie.name === animal).residents.filter((res) => res.sex === sex).map((res) => res.name),
  }));
  chave.SE = chave.SE.map((animal) => ({
    [animal]: data.species.find((specie) =>
      specie.name === animal).residents.filter((res) => res.sex === sex).map((res) => res.name),
  }));
  chave.SW = chave.SW.map((animal) => ({
    [animal]: data.species.find((specie) =>
      specie.name === animal).residents.filter((res) => res.sex === sex).map((res) => res.name),
  }));
}

function getAnimalMap(options) {
  // seu código aqui
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  defaultList(obj);
  if (options === undefined || options.includeNames === undefined) {
    return obj;
  } if (options.sex !== undefined) {
    FilterBySex(obj, options.sex);
    if (options.sorted === true) {
      SorteOption(obj);
    }
    return obj;
  }
  IncludeNamesFunc(obj, options.sorted);
  return obj;
}

module.exports = getAnimalMap;
