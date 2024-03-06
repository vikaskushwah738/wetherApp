import { useEffect } from 'react'
import './App.css'
import React from 'react'
import { Button } from './componets/Button'
import { Input } from './componets/input'
import { Card } from './componets/card'
import { useWeather } from './context/weather'
export const App = () => {
 const weather=useWeather();
 useEffect(()=>{
  //get current location here
  weather.fetchCurrentLocation(); 
 })
  return (
    <div className='pop'>
      <h1>Weather Forecast</h1>
      <Input/> <br />
      <Button onClick={weather.fetchData} value="Search"/> <br />
      <Card/> <br />
      <Button value="Refresh"/>
    </div>
  )
}


export default App
