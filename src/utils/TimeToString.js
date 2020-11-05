// takes an amount in  Mls, returns a 'mm:ss' string
export function TimeToString(duration)  {

  const isDurationnegative = duration < 0;

  const absValue = Math.abs(duration);

  const seconds = Math.floor((absValue / 1000) % 60);
  const minutes = Math.floor((absValue / (1000 * 60)) % 60);
  const finalminutes = (minutes < 10) ? '0' + minutes : minutes;
  const finalseconds = (seconds < 10) ? '0' + seconds : seconds;

  return `${isDurationnegative ? '-' + finalminutes : finalminutes}:${finalseconds}`
}

