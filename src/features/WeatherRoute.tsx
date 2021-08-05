
import { useAppDispatch } from '../app/hooks';
import {
  fetchWeatherAsync, 
} from './weatherSlice';
import { useParams } from 'react-router-dom';
import { WeatherMain } from './WeatherMain';

export function WeatherRoute() {
  const dispatch = useAppDispatch();

  let { CityName } = useParams<{ CityName: string }>();
  dispatch(fetchWeatherAsync({ name: CityName, count: 5 }));
  
  return (
    <WeatherMain/>
  );
}


