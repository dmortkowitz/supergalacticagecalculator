import { SolarAge } from './../src/galactic.js';
// import { EarthAge } from './../src/agecalc.js';
  describe('SolarAge', function() {
  it('shoud return age on Mercury', function() {
  let age = new SolarAge(33);
  expect(age.mercuryYears()).toEqual(138);
  });
});
