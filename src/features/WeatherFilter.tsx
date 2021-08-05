import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { selectList } from './weatherSlice';
import { Grid, TextField } from '@material-ui/core';
import {
  useHistory
} from "react-router-dom";
import { useAppSelector } from '../app/hooks';
import styles from './Weather.module.css'; 

function WeatherFilter() {
  const list = useAppSelector(selectList);
  let history = useHistory();

  function goto(where: string | null) {
    if (where)
      history.push("/weather/" + where)
    else
      history.push("/");
  }

  const filter = createFilterOptions<string>();

  return (
    <div className="App">
      <Grid container spacing={3}>
        <span hidden>weather</span>
        <Grid item xs={5} />
        <Grid item xs={2}>
          <br />
          <Autocomplete
            className={styles.autocomplete}
            onChange={(event, newValue) => {
              goto(newValue);
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              if (params.inputValue !== '' && filtered.length === 0) {
                filtered.push(
                   params.inputValue);
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            options={list}
            getOptionLabel={(option) => {
              if (typeof option === 'string') {
                return option;
              }
              if (option) {
                return option;
              }
              return option;
            }}
            renderOption={(option) => option}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="City" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={5} />
      </Grid>
    </div >
  );
}



export default WeatherFilter;
