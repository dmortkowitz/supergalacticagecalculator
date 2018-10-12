import { SolarAge, EarthAge } from './../src/galactic.js';
// import { EarthAge } from './../src/agecalc.js';


  describe('SolarAge', function() {
  it('shoud return age on Mercury', function() {
  let age = new SolarAge(33);
  expect(age.mercuryYears(33)).toEqual(137);
  });
});

  describe('SolarAge', function() {
  it('shoud return age on Venus', function() {
  let age = new SolarAge(33);
  expect(age.venusYears(33)).toEqual(53);
  });
});
