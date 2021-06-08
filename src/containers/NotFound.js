import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default class NotFound extends React.Component {
    render() {
        return (
            <Container className="justify-content-md-center m-5">
                <Card className="pt-3">
                    <Card.Title>404 Not Found</Card.Title>
                    <Card.Body>Sorry, the page you are looking for does not exist.</Card.Body>
                </Card>
            </Container>
        );
    }
}