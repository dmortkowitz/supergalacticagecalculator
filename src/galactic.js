

export class SolarAge {
  constructor(age) {
    this.age = age;
  }

  yearsSeconds(age) {
    var ageSeconds = age * 31536000;
    return ageSeconds;
  }

  mercuryYears(age) {
    var mercuryYears = age / 0.24;
    return Math.round(mercuryYears);
  }

  venusYears(age) {
    var venusYears = age / 0.62;
    return Math.round(venusYears);
  }

  marsYears(age) {
    var marsYears = age / 1.88;
    return Math.round(marsYears);
  }

  jupiterYears(age) {
    var jupiterYears = age / 11.86;
    return Math.round(jupiterYears);
  }

  mercuryRemaining(age) {
    let thisAge = new SolarAge(age);
    let mercuryRemaining = thisAge.mercuryYears(71) - thisAge.mercuryYears(age);
    return Math.round(mercuryRemaining);
  }

  venusRemaining(age) {
    let thisAge = new SolarAge(age);
    let venusRemaining = thisAge.venusYears(71) - thisAge.venusYears(age);
    return Math.round(venusRemaining);
  }

  earthRemaining(age) {
    let earthRemaining = 71 - age;
    return Math.round(earthRemaining);
  }


  marsRemaining(age) {
    let thisAge = new SolarAge(age);
    let marsRemaining = thisAge.marsYears(71) - thisAge.marsYears(age);
    return Math.round(marsRemaining);
  }
  jupiterRemaining(age) {
    let thisAge = new SolarAge(age);
    let jupiterRemaining = thisAge.jupiterYears(71) - thisAge.jupiterYears(age);
    return Math.round(jupiterRemaining);
  }


}

export class EarthAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }
  calcAge() {
    let date = new Date();
    let birthday = new Date(this.birthday);
    let earthAge = date.getFullYear() - birthday.getFullYear();
    let mon = date.getMonth() - birthday.getMonth();
    if (mon < 0 || (mon === 0 && date.getDate() < birthday.getDate())) {
      return "Invalid age.";
    } else {
    return earthAge;
    }
  }
}
