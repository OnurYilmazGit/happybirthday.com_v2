import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import happyBirthdayLogo from '../images/HBcom.svg';

class HomePage extends React.Component {
  render() {    
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="12" lg="6">
            <img
              alt="HappyBirthday.com logo"
              src={happyBirthdayLogo}
              className="w-50 px-5 py-4 d-inline-block align-top"
            />{' '}

            <Container className="p-2">
              <Row className="justify-content-md-center font-weight-bold mb-3">
                Is it hard to keep all birthdays in your mind? Now, you're in a great place!
              </Row>
              <Row className="justify-content-md-center">
                Just create your free account and start keeping track of the birthdays of your loved ones.
                We can remind you of all the important days with other useful features.
              </Row>
            </Container>

            {/* <Container className="mt-4">
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  <LinkContainer to="/register">        
                    <Button variant="primary">Register</Button>{' '}
                  </LinkContainer>
                </Col>
                <Col xs lg="2">  
                  <LinkContainer to="/login">  
                    <Button variant="secondary">Login</Button>{' '}
                  </LinkContainer>
                </Col>
              </Row>
            </Container> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;