import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';

export default function FindSong() {
  return (
    <Accordion className="w-100">
      <p>Here you can find some guidelines for your journey in <i>HappyBirthday.com</i>:</p>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Step 1: Register
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
            Step 2: Login
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
            Step 3: Monitor Birthdays
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            When you sign in, the third page (user hub) will appear
            and you will see two tables on this page. These tables
            show upcoming birthdays in detail.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Step 4: Adding a Birthday
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
            Step 5: Removing a Birthday
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            You can delete any birthday record by clicking the red
            "Delete" button located on top of related birthday card.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            Step 6: Logging out
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            You can safely log out from your account via the "Logout" you
            can find at the bottom of the user hub screen.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            Extra: Find Birthday Song™
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            With this extra feature, it is possible to reasily find a 
            lovely birthday song for your loved ones, and send it to 
            them to celebrate their birthdays.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}