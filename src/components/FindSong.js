import React, { useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';

export default function FindSong() {
	const url = "https://www.youtube.com/results?search_query=birthday+song+";
	const [name, setName] = useState("");
	
	return (
		<Container>  
			<Row className="justify-content-lg-center mt-3">
   	 		<Col md={12} lg={8}>
					<Card>
						<Card.Header className="font-weight-bold">
							Find your birthday songs with ease!
						</Card.Header>
						<Card.Body>
							Enter the name of the person having a birthday, and let <i>Find Birthday Song™</i> work its magic.
							<hr />

							<Form>
								<Form.Group controlId="formBirthdaySong">
									<Form.Label>Name</Form.Label>
									<Form.Control name="name" type="input" placeholder="Enter the name" onChange={(e) => setName(e.target.value)}/>
								</Form.Group>

								<Button variant="success" type="button" onClick={() => {window.location.href = url + name;}}>
									Find
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
  		</Row>
		</Container>
	);
}