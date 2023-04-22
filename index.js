// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(function (driver) {return driver.toUpperCase() === string.toUpperCase()})
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {return driver.toUpperCase().slice(0, string.length) === string.toUpperCase()})
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {return driver.name === string})
}