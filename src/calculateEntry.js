const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const obj = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.reduce((acc, curr) => (curr.age >= 18 && curr.age < 50 ? acc + 1 : acc), 0),
    senior: entrants.reduce((acc, curr) => (curr.age >= 50 ? acc + 1 : acc), 0),
  };
  return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
  console.log(entrants);
  if (entrants === undefined || entrants === { }) {
    return 0;
  }
  const counter = countEntrants(entrants);
  const priceCal = counter.child * 20.99 + counter.adult * 49.99 + counter.senior * 24.99;
  return priceCal;
}

module.exports = { calculateEntry, countEntrants };
