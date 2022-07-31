export class Birthday {
  day: number;
  month: number;
  year?: number;
  constructor(day: number, month: number, year?: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

export function countDownFunction(e: Birthday) {
  const moment = require("moment");
  const today = moment();
  const dateformatedDay = Number(today.format("DD"));
  const dateformatedMonth = Number(today.format("M"));
  var month = e.month - 1;

  function yearPlusOne() {
    var year = new Date().getFullYear();
    if (
      e.month < dateformatedMonth ||
      (e.month === dateformatedMonth && e.day < dateformatedDay)
    ) {
      return year + 1;
    } else return year;
  }

  var countDownDate = new Date(yearPlusOne(), month, e.day).getTime();
  console.log(countDownDate);
  var now = new Date().getTime();

  var distance = countDownDate - now;
  console.log(distance);
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;

  console.log(days);
  return days;
}
