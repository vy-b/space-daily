import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import MainPageView from './Components/MainPageView';

function App() {
  return (
      <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" >
              <MainPageView/>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
