import './App.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useAppSelector } from './app/hooks';
import { place, selectList } from './features/weatherSlice';
import { Grid, TextField } from '@material-ui/core';
import {
  useHistory
} from "react-router-dom";

function App() {
  const list = useAppSelector(selectList);
  let history = useHistory();

  function goto(where: place | null) {
    if (where)
      history.push("/weather/" + where?.id)
    else
      history.push("/");
  }

  return (
    <div className="App">
      <Grid container spacing={3}>
        <span hidden>weather</span>
        <Grid item xs={5} />
        <Grid item xs={2}>
        <br/>
          <Autocomplete
            onChange={(event, newValue) => {
              goto(newValue);
            }}
            options={list}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Город" variant="outlined" />}
          />
        </Grid>
        <Grid item xs={5} />
      </Grid>
    </div >
  );
}



export default App;
