import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';

import happyBirthdayLogo from '../images/favicon.png';

class Header extends React.Component {
  render() {    
    return (
      <Navbar expand="md" bg="dark" variant="dark">
        <LinkContainer to="/">                
          <Navbar.Brand href="#home">
            <img
              alt="HappyBirthday.com logo"
              src={happyBirthdayLogo}
              width="30px"
              className="d-inline-block align-top mx-3"
            />{' '}
            {this.props.title}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto" navbarScroll>
            <LinkContainer to="/">
              <Nav.Link>Homepage</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/hub">
              <Nav.Link>Hub</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/findsong">
              <Nav.Link>Find Birthday Song™</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;