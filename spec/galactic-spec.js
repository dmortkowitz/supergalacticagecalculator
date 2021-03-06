import { SolarAge, EarthAge } from './../src/galactic.js';
// import { EarthAge } from './../src/agecalc.js';


describe('SolarAge', function() {
  it('should return age on Mercury', function() {
  let age = new SolarAge(33);
  expect(age.mercuryYears(33)).toEqual(138);
  });
});

describe('SolarAge', function() {
  it('should return age on Venus', function() {
  let age = new SolarAge(33);
  expect(age.venusYears(33)).toEqual(53);
  });
});

describe('SolarAge', function() {
  it('should return age on Venus', function() {
  let age = new SolarAge(33);
  expect(age.marsYears(33)).toEqual(18);
  });
});

describe('SolarAge', function() {
  it('should return age on Jupiter', function() {
  let age = new SolarAge(33);
  expect(age.jupiterYears(33)).toEqual(3);
  });
});

describe('SolarAge', function() {
  it('should return years remaining on Mercury', function(){
    let age = new SolarAge(33);
    expect(age.mercuryRemaining(33)).toEqual(158);
  });
});

describe('SolarAge', function() {
  it('should return years remaining on Venus', function(){
    let age = new SolarAge(33);
    expect(age.venusRemaining(33)).toEqual(62);
  });
});

describe('SolarAge', function() {
  it('should return years remaining on Earth', function(){
    let age = new SolarAge(33);
    expect(age.earthRemaining(33)).toEqual(38);
  });
});

describe('SolarAge', function() {
  it('should return years remaining on Mars', function(){
    let age = new SolarAge(33);
    expect(age.marsRemaining(33)).toEqual(20);
  });
});

describe('SolarAge', function() {
  it('should return years remaining on Jupiter', function(){
    let age = new SolarAge(33);
    expect(age.jupiterRemaining(33)).toEqual(3);
  });
});

describe('SolarAge', function() {
  it('should tell you if you are past due on Mercury', function(){
    let age = new SolarAge(33);
    expect(age.overripeMercury(33)).toEqual(false);
  });
});

describe('SolarAge', function() {
  it('should tell you if you are past due on Venus', function(){
    let age = new SolarAge(33);
    expect(age.overripeVenus(33)).toEqual(false);
  });
});

describe('SolarAge', function() {
  it('should tell you if you are past due on Earth', function(){
    let age = new SolarAge(33);
    expect(age.overripeEarth(33)).toEqual(false);
  });
});

describe('SolarAge', function() {
  it('should tell you if you are past due on Mars', function(){
    let age = new SolarAge(33);
    expect(age.overripeMars(33)).toEqual(false);
  });
});

describe('SolarAge', function() {
  it('should tell you if you are past due on Jupiter', function(){
    let age = new SolarAge(33);
    expect(age.overripeJupiter(33)).toEqual(false);
  });
});
