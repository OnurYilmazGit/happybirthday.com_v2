import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

export default class NotFound extends React.Component {
  render() {
    return (
      <Container>
				<Row className="justify-content-md-center">
					<Col md={12} lg={8}>
            <Card className="my-3">
              <Card.Body>
                <Card.Title><p>404 Not Found</p></Card.Title>
                <Card.Text>Sorry, the page you are looking for does not exist.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}