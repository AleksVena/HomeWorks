import { Grid } from "@material-ui/core";
import { Fragment } from "react";
import { useAppSelector } from "../app/hooks";
import { selectWeather } from "./weatherSlice";
import { WeatherDate } from './WeatherDate';

export function WeatherMain() {
    const selectedWeather = useAppSelector(selectWeather);
    
    return selectedWeather ? (    
        <Fragment>
          <h1>{selectedWeather.city.name}</h1>
          <Grid container spacing={3}>
            {
              selectedWeather.list.map(
                day => (
                  <WeatherDate {...day} key={day.dt}/>
                )
              )
            }
          </Grid>
        </Fragment>
      ) : (<Fragment><h1>No data for show</h1></Fragment>);  
  }