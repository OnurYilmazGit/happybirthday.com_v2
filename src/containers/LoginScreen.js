import React from 'react';
import { Container, Col, Row, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Register from '../components/Register';
import Login from '../components/Login';

import axios from 'axios';

const api = axios.create({ baseURL: `http://localhost:3000/accounts` });

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleComponentSwitch = this.handleComponentSwitch.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.onAddAccount = this.onAddAccount.bind(this);
    this.state = {showLoginComponent: false, accountList: []};
  }

  componentDidMount(){
    this.getAccounts();
  }

  getAccounts = () => {
    api.get('/').then(res => {
      const accountList = res.data;
      this.setState({ accountList });
    })
  }

  onAddAccount(account){
    api.post('/', account)
      .then(res => this.getAccounts())
  }

  handleComponentSwitch(showLogin) {
    this.setState({showLoginComponent: showLogin});
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <ToggleButtonGroup className="my-3" type="radio" name="options" defaultValue={1}>
              <ToggleButton value={1} variant="secondary" onClick={() => this.handleComponentSwitch(false)}>Register</ToggleButton>
              <ToggleButton value={2} variant="secondary" onClick={() => this.handleComponentSwitch(true)}>Login</ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.showLoginComponent ? <Login accountList={this.state.accountList} onLoginAccount={this.props.handleLoginAccount} onLoginChange={this.props.handleLoginChange}/>
                                           : <Register accountList={this.state.accountList} onAddAccount={this.onAddAccount}/>}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginScreen;