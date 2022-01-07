const convertKelvinToCelsius = (kelvin: number) => {
  const celsius = Math.trunc(kelvin - 273.15)

  return celsius
}

export {convertKelvinToCelsius}