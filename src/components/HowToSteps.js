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
            <p>If you do not have an account, just click the register button.</p>
            For the sign-up to be successful, there are a
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
            and you will see two sections for adding and monitoring birthdays respectively.
            The birthday list shows upcoming birthdays in detail.
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
            click <i>"Add Birthday"</i> button, then a pop-up window will
            appear and you can add your friend's name surname,
            birthday and some extra notes about this day.
            Additionally, you can also add his/her favorite color
            to help you choose your birthday gift.
            When you finish filling the form, you simply need to
            click <i>"Add"</i> button to register this day.
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
            <i>"Delete"</i> button located on top of related birthday card.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="5">
            Step 6: Logging out
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            You can safely log out from your account via the <i>"Logout"</i> you
            can find at the bottom of the user hub screen.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="6">
            Extra: Find Birthday Song™
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body>
            With this extra feature, it is possible to find a lovely
            birthday song for your loved ones to celebrate their birthdays.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}