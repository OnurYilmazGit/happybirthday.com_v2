import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {mail: "", pass: ""}
  }

  handleLoginChange() {
		const accountFilter = this.props.accountList.filter(account => account.mail === this.state.mail);
		if (accountFilter.length === 1 && accountFilter[0].pass === this.state.pass) {
			this.props.onLoginAccount(accountFilter[0].id)
			this.props.onLoginChange(true);
		} else {
			alert("Invalid Login! Please check your credentials.");
		}
  }

	handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

	render() {
		return (
			<Container>
				<Row>
					<Col lg={{ span: 4, offset: 4 }}>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control name="mail" type="email" placeholder="Enter email" onChange={this.handleInputChange}/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control name="pass" type="password" placeholder="Password" onChange={this.handleInputChange}/>
							</Form.Group>

							<Button variant="success" type="button" onClick={this.handleLoginChange}>
								Login
							</Button>
						</Form>
					</Col>
				</Row>

			</Container>
		);
	}
}