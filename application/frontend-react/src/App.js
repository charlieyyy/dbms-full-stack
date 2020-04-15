import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ParticlesBg  from "particles-bg";
import { makeStyles } from '@material-ui/core/styles';


import Pollutant from './Components/Pollutant';
import About from './Components/About';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import City from './Components/City';
import MapChart from './Components/Map';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


export default function BasicExample() {
  const classes = useStyles();

  return (
    <Router>
      <div>
         <ParticlesBg type="circle" bg={true} />
          <ul>
          <li>
            <Link to="/home" style={{ color: '#FFF' }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ color: '#FFF' }}>About</Link>
          </li>
          <li>
            <Link to="/Maps" style={{ color: '#FFF' }}>Map</Link>
          </li>
          <li>
            <Link to="/dashboard" style={{ color: '#FFF' }}>Dashboard</Link>
          </li>
          <li>
            <Link to="/pollutant" style={{ color: '#FFF' }}>Pollutant Study -- choose desired parameter</Link>
          </li>
          <li>
            <Link to="/city" style={{ color: '#FFF' }}>City Study - most_severe_pm_location</Link>
          </li>
          </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
        <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/City">
            <City />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Pollutant">
            <Pollutant />
          </Route>
          <Route path="/Maps">
            <MapChart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}