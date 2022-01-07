const getDayPeriod = (hours: number) => {
  if(hours > 6 && hours < 12){
    return 'day'
  } else if(hours >= 12 && hours < 18){
    return 'day'
  } else {
    return 'night'
  }
}

export {getDayPeriod}