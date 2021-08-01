
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  place,
  selectCurPlace, setCur
} from './weatherSlice';
import { Grid } from '@material-ui/core';
import { WeatherDate } from './WeatherDate';
import { useParams } from 'react-router-dom';

export function Weather() {
  const curPlace = useAppSelector(selectCurPlace);
  const dispatch = useAppDispatch();

  let { id } = useParams<{ id: string }>();
  dispatch(setCur(Number.parseInt(id)));

  function r(g: number): place{
    return {
      id: curPlace.id,
      name: curPlace.name,
      temp: curPlace.temp+g,
      min: curPlace.min-g,
      max: curPlace.max+g,
      wind: curPlace.wind-g,
      //date: new Date()
    };
  }

  return (
    <div>
      
      <h1>{curPlace.name}</h1>
      <Grid container spacing={3}>
        <WeatherDate {...r(1)}  />
        <WeatherDate {...r(2)}  />
        <WeatherDate {...r(3)}  />
        <WeatherDate {...r(4)}  />
        <WeatherDate {...r(5)}  />
      </Grid>

    </div>
  );
}
