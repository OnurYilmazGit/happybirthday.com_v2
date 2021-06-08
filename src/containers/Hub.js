import React from 'react';

import BirthdayPanel from '../components/BirthdayPanel'
import LoginScreen from './LoginScreen'

class Hub extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.state = {loggedIn: false};
  }

  handleLoginChange(loginBool) {
    this.setState({loggedIn: loginBool});
  }

  render() {
		return (
			this.state.loggedIn ? <BirthdayPanel onLoginChange={this.handleLoginChange}/> 
												  : <LoginScreen handleLoginChange={this.handleLoginChange}/> 
		);
	}
}

export default Hub;