import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import FindSong from './components/FindSong'
import NotFound from './components/NotFound'
import HomePage from './containers/HomePage'
import Hub from './containers/Hub'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginAccount = this.handleLoginAccount.bind(this);
    this.state = {loggedIn: false, loginAccount: -1};
  }

  handleLoginChange(loginBool) {
    this.setState({loggedIn: loginBool});
  }

  handleLoginAccount(accountIndex) {
    this.setState({loginAccount: accountIndex});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header title="HappyBirthday.com"/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/hub" render={(props) => ( <Hub {...props} loggedIn={this.state.loggedIn} handleLoginChange={this.handleLoginChange} loginAccount={this.state.loginAccount} handleLoginAccount={this.handleLoginAccount} />)} />
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