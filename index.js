function calculateTimeUntil(num){
  const currentTime = Math.floor(Date.now() / 1000);
  const timestamp = parseInt(num) / 1000;
  const timeUntil = timestamp - currentTime;

  let second, seconds, timeTo, minute, hour, day, mins, hrs, days;
  second = 1;
  minute = 60;
  hour = 3600;
  day = 86400;

  function units(divider, total = timeUntil) {
    let obj = Object.create(null);
    if(total && total > divider) {
      obj.units = Math.floor(total / divider);
      obj.overflow = total % divider;
      return obj;
    }
    obj.units = 0;
    obj.overflow = total;
    return obj;
  }
  
  timeTo = Object.create(null);

  if (timeUntil > 1) {
    // days
    days = units(day);
    timeTo.days = days.units;
  
    // hours
    hrs = units(hour, days.overflow);
    timeTo.hrs = hrs.units;
  
    // mins
    mins = units(minute, hrs.overflow);
    timeTo.mins = mins.units;

    // seconds
    seconds = units(second, mins.overflow);
    timeTo.seconds = seconds.units;

  } else {
    timeTo.days = 0;
    time.hrs = 0;
    timeTo.mins = 0;
    timeTo.seconds = 0;
  }

  return timeTo
}
