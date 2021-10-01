class Clock {
  constructor(hour, minute = 0) {
    console.log("contructor " + hour, minute);
    this.totalMinutes = hour * 60 + minute;
    console.log("contructor conta " + (hour * 60 + minute));
  }

  toString() {
    console.log("this minutes in to string" + this.totalMinutes);
    let totalMinutes = this.totalMinutes;
    while (totalMinutes < 0) {
      totalMinutes += 1440;
    }
    let clockTime = this._handleHourAndMinutes(totalMinutes);

    return (
      ("00" + clockTime.hours).slice(-2) +
      ":" +
      ("00" + clockTime.minutes).slice(-2)
    );
  }

  plus(minutes) {
    let clockTime = this._handleHourAndMinutes(this.totalMinutes + minutes);

    return new Clock(clockTime.hours, clockTime.minutes);
  }

  minus(minutes) {
    let clockTime = this._handleHourAndMinutes(this.totalMinutes - minutes);
    console.log("objeto em minus " + clockTime.hours, clockTime.minutes);
    return new Clock(clockTime.hours, clockTime.minutes);
  }

  equals() {
    throw new Error("Remove this statement and implement this function");
  }

  _handleHourAndMinutes(minusMinutes) {
    console.log(" total minutos metodo " + minusMinutes);
    const hours = Math.floor(minusMinutes / 60);
    console.log(
      " horas metodo e conta horas metodo " + hours,
      Math.floor(minusMinutes / 60)
    );
    const minutes = minusMinutes - hours * 60;
    return { hours, minutes };
  }
}

console.log(new Clock(0, 3).minus(4).toString());
