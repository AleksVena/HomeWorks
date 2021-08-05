import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
//import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { WeatherRoute } from './features/WeatherRoute';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/weather/:CityName"><WeatherRoute /></Route>
          <Route><Redirect to="/"></Redirect></Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();
