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
    return Math.floor(mercuryYears);
  }

  venusYears(age) {
    var venusYears = age / 0.62;
    return Math.floor(venusYears);
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
