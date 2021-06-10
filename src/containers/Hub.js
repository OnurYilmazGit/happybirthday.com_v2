import React from 'react';

import BirthdayPanel from '../components/BirthdayPanel'
import LoginScreen from './LoginScreen'

class Hub extends React.Component {render() {
		return (
			this.props.loggedIn ? <BirthdayPanel loginAccount={this.props.loginAccount} onLoginChange={this.props.handleLoginChange}/> 
												  : <LoginScreen handleLoginAccount={this.props.handleLoginAccount} handleLoginChange={this.props.handleLoginChange}/> 
		);
	}
}

export default Hub;