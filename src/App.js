import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import CityName from './CityName';

class App extends Component {
  render() {
    var cityArray = [];
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/city/:cityName" component={CityName}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
