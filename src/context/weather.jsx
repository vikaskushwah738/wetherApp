 import {createContext, useContext, useState} from 'react'
 import {getWeatherCity, getWeatherDataForLocaton} from '../api'
 const WeatherContext=createContext(null); 
 
 export const useWeather=() =>{
    return useContext(WeatherContext);
 }

 export const WeatherProvider = (props) => {
   const [data, setData]= useState(null);
   const [searchCity, setSearchCity]=useState(null); 
   const fetchData=async() =>{
      const response=await getWeatherCity(searchCity)
      setData(response);
   }
   const fetchCurrentLocation= ()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
      getWeatherDataForLocaton(
         position.coords.latitude,
         position.coords.longitude
      ).then((data)=> setData(data));
      });
   };
   return (
     <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData,fetchCurrentLocation}}>
        {props.children}
     </WeatherContext.Provider>
   )
 }
 