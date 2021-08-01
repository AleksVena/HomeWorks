import { Grid } from "@material-ui/core";
import { place } from "./weatherSlice";
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export function WeatherDate(curPlace: place) {

    return (
        <Grid item xs={2}>
            <Card>
                <CardContent>
                    <h2>Temp: {curPlace.temp}°</h2>
                    <h2>Min: {curPlace.min}°</h2>
                    <h2>Max: {curPlace.max}°</h2>
                    <h2>Wind: {curPlace.wind}m/s</h2>
                </CardContent>
            </Card>
        </Grid>
    );
}