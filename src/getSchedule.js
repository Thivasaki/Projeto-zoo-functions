const data = require('../data/zoo_data');

function generalSchedule() {
  const daysOfWeek = Object.keys(data.hours);
  const obj = {};
  daysOfWeek.forEach((day) => {
    obj[day] = {};
    const specFilter = data.species.filter((specie) => specie.availability.includes(day) === true);
    obj[day].officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
    obj[day].exhibition = specFilter.map((specie) => specie.name);
  });
  obj.Monday.exhibition = 'The zoo will be closed!';
  obj.Monday.officeHour = 'CLOSED';
  return obj;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const animals = [];
  data.species.forEach((specie) => animals.push(specie.name));
  if (animals.includes(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  } if (Object.keys(data.hours).includes(scheduleTarget)) {
    const newObj = { [scheduleTarget]: generalSchedule()[scheduleTarget] };
    return newObj;
  }
  return generalSchedule();
}

module.exports = getSchedule;
