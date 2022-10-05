function leapYear(year) {
  if (year % 4 === 0 || (year % 4 === 0 && year % 400 === 0)) {
    console.log("it is indeed a leap year");
  } else if ((year % 4 === 0 && year % 100 === 0) || year % 4 !== 0) {
    console.log("this is not a leap year");
  }
}

leapYear(2100);
