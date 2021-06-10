import React from 'react';
import { Container, Row, Col, Button, Accordion, Card, Form, ListGroup, Badge } from 'react-bootstrap'

import axios from 'axios';

const api = axios.create({ baseURL: `http://localhost:3000/records` });

export default class BirthdayPanel extends React.Component {
  constructor(props) {
    super(props);
    this.getBirthdays = this.getBirthdays.bind(this);
    this.onModifyBirthday = this.onModifyBirthday.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {name: "", bday: "", note: "", color: "", birthdayData: {}, birthdayList: []};
  }

  componentDidMount(){
    this.getBirthdays();
  }

  getBirthdays = () => {
    api.get('/'+this.props.loginAccount.toString())
      .then(res => {
        const birthdayData = res.data;
        this.setState({ birthdayData: birthdayData });
        if (birthdayData !== {}) {
          const birthdayList = birthdayData.birthdays
          this.setState({ birthdayList: birthdayList });
        }
      })
      .catch(err => { if (err.response.status === 404) {console.log("Status code 404: No such birthday record")}
                      else {console.log(err)}})
  }

  onModifyBirthday(e, operation, index = 0){
    e.preventDefault();

    // api.delete('/'+this.props.loginAccount.toString())

    let birthdayUpdate = this.state.birthdayList
    if (operation === "add") {
      let birthday = {"name": this.state.name, "bday": this.state.bday, "note": this.state.note, "color": this.state.color}
      birthdayUpdate.push(birthday)
      this.setState({ birthdayList: birthdayUpdate });
  
    } else if (operation === "delete") {
      birthdayUpdate.splice(index,1)
      this.setState({ birthdayList: birthdayUpdate });
    } else {
      console.log("Invalid operation!")
    }      
    
    this.setState({ birthdayData: {"id": this.props.loginAccount.toString(), "birthdays":this.state.birthdayList} });
  
    api.patch('/'+this.props.loginAccount.toString(), this.state.birthdayData)
      .then(res => this.getBirthdays())
      .catch(err => { if (err.response.status === 404) {api.post('/', this.state.birthdayData).then(res => this.getBirthdays())}
                      else {console.log(err)}})
  }

  onDeleteBirthday(id) {
    api.delete(`/${id}`)
      .then(res => this.getBirthdays())
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
      <Container xs="12" md="3" className="justify-content-lg-center">
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
                    <Form onSubmit={(e) => {this.onModifyBirthday(e, "add")}}>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name Surname" maxLength="40" required onChange={this.handleInputChange}/>
                      </Form.Group>

                      <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control name="bday" type="date" placeholder="1990-01-01" /*value="1990-01-01"*/ min="1900-01-01" max="2030-12-31" required onChange={this.handleInputChange}/>
                      </Form.Group>

                      <Form.Group controlId="formNote">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control name="note" as="textarea" placeholder="Do you have a birthday gift in mind?" onChange={this.handleInputChange}/>
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
            {this.state.birthdayList.length > 0 ?
              this.state.birthdayList.map((item, index) => {
                return (
                  <Card key={index} className="mb-1">
                    <Card.Header className="font-weight-bold">
                      {item.name}
                      <Badge className="mx-3" style={{backgroundColor:item.color, color:"rgba(255, 255, 255, 0.5)"}}> Favorite Color </Badge>
                      <Button variant="outline-danger" size="sm" onClick={(e) => {this.onModifyBirthday(e, "delete", index)}}>Delete</Button>
                    </Card.Header>
                    <Card.Body>
                      <ListGroup variant="flush">
                        <ListGroup.Item><i>Birthday:</i> {item.bday}</ListGroup.Item>
                        <ListGroup.Item><i>Note:</i> {item.note}</ListGroup.Item>
                      </ListGroup> 
                    </Card.Body>
                  </Card>
                );
              }) :
              <Card className="mb-1">
                <Card.Header className="font-weight-bold">
                  No birthday record to show.
                </Card.Header>
              </Card>
            }
          </Col>
        </Row>

        <Row>
          <Col>           
            <Button className="w-100" variant="primary" onClick={() => this.props.onLoginChange(false)}>
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}