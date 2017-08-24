import axios from 'axios';

const API_KEY = '014ab9a93870b2a2ed7194796c20ad1d';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url     = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }

}