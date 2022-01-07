import dayCloud from '@assets/day-cloud.json'
import dayPartlyShower from '@assets/day-partly-shower.json'
import daySnow from '@assets/day-snow.json'
import day from '@assets/day.json'
import night from '@assets/night.json'
import nightPartlyShower from '@assets/night-partly-shower.json'
import nightSnow from '@assets/night-snow.json'
import nightCloud from '@assets/night-cloud.json'
import storm from '@assets/storm.json'

export interface AnimatedObject {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
}

export interface IResolveWeather {
  animation: string | AnimatedObject | {
    uri: string;
  }
  description: string
}

const ResolveWeather = (weatherId: number, dayPeriod: string): IResolveWeather => {
  switch(dayPeriod){
  case 'day':
    if(weatherId >= 200 && weatherId <= 299){
      return {
        animation: storm,
        description: 'Cuidado! Bastante trovões'
      }
    } else if (weatherId >= 300 && weatherId <= 399) {
      return {
        animation: dayPartlyShower,
        description: 'Um pouquinho de chuva para trazer alegria'
      }
    } else if (weatherId >= 500 && weatherId <= 599) {
      return {
        animation: dayPartlyShower,
        description: 'Bastante chuva, aproveite para fazer as tarefas de casa'
      }
    } else if (weatherId >= 600 && weatherId <= 699) {
      return {
        animation: daySnow,
        description: 'Neveeeeee!'
      }
    } else if (weatherId >= 700 && weatherId <= 799) {
      return {
        animation: storm,
        description: 'Feche as janelas e evite sair de casa hoje.'
      }
    } else if (weatherId == 800) {
      return {
        animation: day,
        description: 'Que dia lindo! Partiu praia ?'
      }
    } else if (weatherId >= 801 && weatherId <= 899) {
      return {
        animation: dayCloud,
        description: 'Um pouco de nuvens, nada mal hein !?'
      }
    }
    break
  case 'night':
    if(weatherId >= 200 && weatherId <= 299){
      return {
        animation: storm,
        description: 'Cuidado com a tempestade! Fique em casa.'
      }
    } else if (weatherId >= 300 && weatherId <= 399) {
      return {
        animation: nightPartlyShower,
        description: 'Um pouquinho de chuva para dormir bem.'
      }
    } else if (weatherId >= 500 && weatherId <= 599) {
      return {
        animation: nightPartlyShower,
        description: 'Eita! Muita chuva.'
      }
    } else if (weatherId >= 600 && weatherId <= 699) {
      return {
        animation: nightSnow,
        description: 'Neveeeeee!!'
      }
    } else if (weatherId >= 700 && weatherId <= 799) {
      return {
        animation: storm,
        description: 'Feche as janelas e evite sair de casa.'
      }
    } else if (weatherId == 800) {
      return {
        animation: night,
        description: 'Hora de descansar'
      }
    } else if (weatherId >= 801 && weatherId <= 899) {
      return {
        animation: nightCloud,
        description: 'Clima tranquilo, nada mal hein !?'
      }
    } break
  default: 
    return {
      animation: day,
      description: 'Que dia lindo! Partiu praia ?'
    }
  }

  return {
    animation: day,
    description: 'Que dia lindo! Partiu praia ?'
  }
  
}

export {ResolveWeather}
