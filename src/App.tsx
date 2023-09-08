import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className='temperature-box'>
          <label>Celcius</label>
          <input value={temperatureC ?? ''} onChange={handleCelciusChange} name='celcius' type='number'/>
        </div>
        <div className='temperature-box'>
          <label htmlFor="">Fahrenheit</label>
          <input value={temperatureF ?? ''} onChange={handleFahrenheitChange} name='fahrenheit' type='number'/>
        </div>
        <div className='temperature-box'>
          <label htmlFor="">Kelvin</label>
          <input value={temperatureK ?? ''} onChange={handleKelvinChange} name='kelvin' type='number'/>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
