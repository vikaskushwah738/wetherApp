const baseURL = "https://api.weatherapi.com/v1/current.json?key=32f60bd7c9384c198cd110111240301";

export const getWeatherCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
} 

export const getWeatherDataForLocaton = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
} 