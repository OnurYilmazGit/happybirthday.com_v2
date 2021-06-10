import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import happyBirthdayLogo from "../images/HBcom.svg";
import Login from "../components/Login";

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
            />{" "}
            <Container className="p-2">
              <Row className="justify-content-md-center font-weight-bold mb-3">
                Is it hard to keep all birthdays in your mind? Now, you're in a
                great place!
              </Row>
              <Row className="justify-content-md-center">
                Just create your free account and start keeping track of the
                birthdays of your loved ones. We can remind you of all the
                important days with other useful features. Here you can find
                some guidelines through your journey:
                <br></br>
              </Row>
              <Row>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Step 1
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        If you do not have an account, just click the register
                        button. For the sign-up to be successful, there are a
                        few conditions: first, each email address needs to be
                        unique and should be written in the correct form.
                        Additionally, your password should match each other.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Step 2
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        After creating a free account, you need to click the
                        login button to sign in to your account. But be careful,
                        you have to write your email and password correctly.
                        Otherwise, you can click the “Forgot password?” button.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Step 3
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        When you sign in, the third page (user hub) will appear
                        and you will see two tables on this page. These tables
                        show upcoming birthdays and all birthdays in detail.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Step 4
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        If you want to add a new birthday, you just need to
                        click "Add Birthday" button, then a pop-up window will
                        appear and you can add your friend's name surname,
                        birthday and some extra notes about this day.
                        Additionally, you can choose a colour to represent this
                        day. When you finish your process, you simply need to
                        click “Add” button to register this day.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        Step 5
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        As the final step, your all favourite days will appear
                        on the screen.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
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
