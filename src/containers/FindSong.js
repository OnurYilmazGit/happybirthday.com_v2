import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import Login from '../components/Login';

export default function FindSong() {
	const url = "https://www.youtube.com/results?search_query=birthday+song+";
	const [name, setName] = useState("");
	
	return (
		<Container className="justify-content-lg-center w-50 mt-3">
			<Card>
				<Card.Header>
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
		</Container>
	);
}