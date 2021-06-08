import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './containers/HomePage'
import Hub from './containers/Hub'
import FindSong from './containers/FindSong'
import NotFound from './containers/NotFound'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header title="HappyBirthday.com"/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/hub" component={Hub} />
            <Route exact path="/findsong" component={FindSong} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
        <div style={{height: "90px"}} />
        {/* This div is added to prevent footer overlap. Solution can be improved. */}
        <Footer />
      </div>
    );
  }
}

export default App;