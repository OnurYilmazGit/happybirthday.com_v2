import React from 'react';

import { Container, Row, Col, Button, Accordion, Card, Form } from 'react-bootstrap'

export default class BirthdayPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }

  handleLoginChange(loginBool) {
    this.props.onLoginChange(loginBool);
  }

  render() {
    return (
      <Container xs lg="3" className="justify-content-lg-center m-5">
        <Row>
          <Col className="mt-3">
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Add Birthday
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form /*onSubmit={this.handleAddAccount}*/>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name Surname" maxlength="40" onChange={this.handleInputChange}/>
                      </Form.Group>

                      <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control name="birthDay" type="date" placeholder="1990-01-01" value="1990-01-01" min="1900-01-01" max="2030-12-31" onChange={this.handleInputChange}/>
                      </Form.Group>

                      <Form.Group controlId="formNotes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control name="mail" as="textarea" placeholder="Do you have a birthday gift in mind?" onChange={this.handleInputChange}/>
                      </Form.Group>

                      <Form.Group controlId="formBasicPhone">
                        <Form.Label>Favorite Color</Form.Label>
                        <Form.Control name="color" type="color" value="#37BFE6" onChange={this.handleInputChange}/>
                      </Form.Group>

                      <Button className="mr-2" variant="success" type="submit">
                        Add
                      </Button>
                      <Button variant="danger" type="Reset">
                        Reset
                      </Button>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>


        <Row className="my-3">
          <Col>
            <Card className="mb-1">
              <Card.Header>
                Ahmet Mehmet    
              </Card.Header>
              <Card.Body>
                01/01/2001
                Loves expensive gifts
                Black
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Ali Veli    
              </Card.Header>
              <Card.Body>
                01/01/2001
                Loves expensive gifts
                Black
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>           
            <Button variant="primary" onClick={() => this.handleLoginChange(false)}>
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}