import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  const [temperatureF, setTemperatureF] = useState<number | null>(null)
  const [temperatureC, setTemperatureC] = useState<number | null>(null)
  const [temperatureK, setTemperatureK] = useState<number | null>(null)

  const celciusToFahrenheit = (temperature: number) => {
    return temperature * 1.8 + 32
  }

  const fahrenheitToCelcius = (temperature: number) => {
    return (temperature - 32) * (5/9)
  }

  const celciusToKelvin = (temperature: number) => {
    return Number(temperature) + 273.15
  }

  const kelvinToCelcius = (temperature: number) => {
    return temperature - 273.15
  }

  const fahrenheitToKelvin = (temperature: number) => {
    return (temperature - 32) * (5/9) + 273.15
  }

  const kelvinToFahrenheit = (temperature: number) => {
    return (temperature - 273.15) * 1.8 + 32
  }

  const handleCelciusChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numberTemperature = event.target.value as unknown as number

    setTemperatureC(numberTemperature)
    setTemperatureF(celciusToFahrenheit(numberTemperature))
    setTemperatureK(celciusToKelvin(numberTemperature))
  }

  const handleFahrenheitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numberTemperature = event.target.value as unknown as number

    setTemperatureF(numberTemperature)
    setTemperatureC(fahrenheitToCelcius(numberTemperature))
    setTemperatureK(fahrenheitToKelvin(numberTemperature))
  }

  const handleKelvinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numberTemperature = event.target.value as unknown as number

    setTemperatureK(numberTemperature)
    setTemperatureC(kelvinToCelcius(numberTemperature))
    setTemperatureF(kelvinToFahrenheit(numberTemperature))
  }

  return (
    <div className="card">
      <div className='temperature-box'>
        <label>Celcius</label>
        <input value={temperatureC ?? ''} onChange={handleCelciusChange} name='celcius' type='number'/>
      </div>
      <div className='temperature-box'>
        <label>Fahrenheit</label>
        <input value={temperatureF ?? ''} onChange={handleFahrenheitChange} name='fahrenheit' type='number'/>
      </div>
      <div className='temperature-box'>
        <label>Kelvin</label>
        <input value={temperatureK ?? ''} onChange={handleKelvinChange} name='kelvin' type='number'/>
      </div>
    </div>
  )
}

export default App
