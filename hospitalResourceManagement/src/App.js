import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import FeedList from "./FeedList.jsx";
import HomePage from "./components/Homepage.jsx";
import Accomodation from "./components/Accomodation.jsx";
import SearchTrain from "./components/SearchTrain.jsx";
import BookTrain from "./components/BookTrain.jsx";
import SearchHotel from "./components/SearchHotel.jsx";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={"/"} component={ HomePage } />
        <Route path={"/book-accomodation"} component={ Accomodation } />
        <Route path={"/book-train"} component={ BookTrain } />
        <Route path={"/search-train"} component={ SearchTrain } />
        <Route path={"/search-hotel"} component={ SearchHotel } />
      </Router>
    );
  }
}

export default App;
