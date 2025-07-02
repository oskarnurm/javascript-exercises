const findTheOldest = function (people) {
  const getAge = (person) =>
    (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;

  return people.reduce((oldest, current) =>
    getAge(current) > getAge(oldest) ? current : oldest,
  );
};

// Do not edit below this line
module.exports = findTheOldest;
