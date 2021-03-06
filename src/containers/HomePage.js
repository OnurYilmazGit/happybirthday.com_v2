import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import happyBirthdayLogo from "../images/HBcom.svg";
import HowToSteps from "../components/HowToSteps";

class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6} sm={4} lg={3} className="justify-content-md-center my-3">
            <Image alt="HappyBirthday.com logo" src={happyBirthdayLogo} fluid />
          </Col>
        </Row>
        <Row className="justify-content-md-center font-weight-bold mt-3 mb-4">
          <Col md={12} lg={8} className="bg-info text-white text-center" style={{borderRadius: "10px"}}>
            <p className="mt-3">Is it hard to keep all birthdays in your mind? Now, you're in a great place!</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={12} lg={8}>
            <p>Just create your free account and start keeping track of the birthdays of your loved ones. We can remind you of all the important days with other useful features.</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={12} lg={8} >
            <hr />
            <HowToSteps />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
