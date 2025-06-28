import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';



const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" className='mb-3'>
            <Navbar.Brand href="/">Анализ сварного шва</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/history">История</Nav.Link>
                
            </Nav>
            
        </Navbar>
    );
}

export default Navigation;