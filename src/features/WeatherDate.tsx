import { Grid } from "@material-ui/core";
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { WeatherPerDate } from "./weatheApi";

export function WeatherDate(curDate: WeatherPerDate) {

    return (
        <Grid item xs={2}>
            <Card>
                <CardContent>
                    <h2>Temp: {Math.round(curDate.temp.day - 273.15)}°</h2>
                    <h2>Min: {Math.round(curDate.temp.min- 273.15)}°</h2>
                    <h2>Max: {Math.round(curDate.temp.max- 273.15)}°</h2>
                    <h2>Wind: {Math.round(curDate.speed)}m/s</h2>
                </CardContent>
            </Card>
        </Grid>
    );
}