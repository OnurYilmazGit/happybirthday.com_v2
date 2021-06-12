import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddAccount = this.handleAddAccount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {name: "", mail: "", pass: "", passRepeat: "", phone: ""}
  }

  handleAddAccount(e) {
    e.preventDefault();

		const accountFilter = this.props.accountList.filter(account => account.mail === this.state.mail);

		if (this.state.pass !== this.state.passRepeat) {
			alert("Passwords don't match.");
		} else if (accountFilter.length === 0) {
      let account = {"id":this.props.accountList.length.toString(), "name":this.state.name, "mail":this.state.mail, "pass":this.state.pass, "phone":this.state.phone}
			this.props.onAddAccount(account);
			alert("You have successfully registered.");
		} else {
			alert("This email exists in our database. You may try logging in.");
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
						<Form onSubmit={this.handleAddAccount}>
							<Form.Group controlId="formBasicName">
								<Form.Label>Name</Form.Label>
								<Form.Control name="name" type="text" placeholder="Name Surname" maxLength="100" onChange={this.handleInputChange}/>
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control name="mail" type="email" placeholder="example@mail.com" maxLength="100" required onChange={this.handleInputChange}/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control name="pass" type="password" minLength="6" maxLength="30" placeholder="Password" required onChange={this.handleInputChange}/>
							</Form.Group>

							<Form.Group controlId="formBasicPasswordRepeat">
								<Form.Label>Re-enter password</Form.Label>
								<Form.Control name="passRepeat" type="password" minLength="6" maxLength="30" placeholder="Re-enter password" required onChange={this.handleInputChange}/>
							</Form.Group>

							<Form.Group controlId="formBasicPhone">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control name="phone" type="tel" /*pattern="[0-9]{3} [0-9]{3} [0-9]{4}"*/ maxLength="30" placeholder="xxx xxx xxxx" onChange={this.handleInputChange}/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Register
							</Button>
						</Form>
					</Col>
				</Row>

			</Container>
		);
	}
}