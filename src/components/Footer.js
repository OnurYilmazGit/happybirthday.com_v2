import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class Footer extends React.Component {
    render() {    
        return (
            <div className="fixed-bottom">  
                <Navbar bg="dark" variant="dark">
                    <Container className="justify-content-center">
                        <Navbar.Text>
                            Copyright © 2021 HappyBirthday.com - All rights reserved.
                        </Navbar.Text>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Footer;