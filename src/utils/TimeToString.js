// takes an amount in  Mls, returns a 'mm:ss' string
export function TimeToString(duration)  {

  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const finalminutes = (minutes < 10) ? '0' + minutes : minutes;
  const finalseconds = (seconds < 10) ? '0' + seconds : seconds;

  return `${finalminutes}:${finalseconds}`
}

