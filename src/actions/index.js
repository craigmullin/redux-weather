import axios from 'axios';

const API_KEY = 'edc2738f90b47bbb5eb54c60da979c03';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Action Creator responsible for API Request
// Pass in {City Name},{Country Code}
// Uses axios rather than jquery

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  
  return {
    type: FETCH_WEATHER,
    payload: request
  }; 
}