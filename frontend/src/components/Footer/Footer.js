import React from 'react';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
  return (

<div className="fixed-bottom justify-content-center">  
            <Navbar className="navbar bg-body-tertiary " color="dark" dark='true' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', opacity : 0.85}}>
                <Container>
                    <NavbarBrand className='m-auto' style={{"fontSize": "14px", opacity : 0.8}}>© 2025 Chill Guys (цифровая кафедра МАИ)</NavbarBrand>
                </Container>
            </Navbar>
        </div>
  )
}

export default Footer