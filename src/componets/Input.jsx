import React from 'react'
import {useWeather} from '../context/weather'
export const Input = () => {
    const weather=useWeather();
   
    return (
    <div>
        <input className='input-field' 
        placeholder='Search' 
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}/>
    </div>
  )
}
