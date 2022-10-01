import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap'

const AppBar = ({ title }) => {
    return (
        <Navbar className='appbar__' bg="light p-4" >
            <Container fluid>
                <Navbar.Brand className='appbrand__' href="/">{title}</Navbar.Brand>
                <Nav className="mr-auto appnav__">
                    <Link to='/'>
                        <Nav.Link href="#home" className='appnavlink__'>Home</Nav.Link>
                    </Link>
                    <Link to='/genre'>
                        <Nav.Link href="#genre" className='appnavlink__'>Genre</Nav.Link>
                    </Link>
                    <Link to='/country'>
                        <Nav.Link href="#country" className='appnavlink__'>Country</Nav.Link>
                    </Link>
                    <Link to='/comingsoon'>
                        <Nav.Link href="#comingsoon" className='appnavlink__'>Coming Soon</Nav.Link>
                    </Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Enter keyword"
                        className="me-2 appbarsearch__ shadow-none"
                        aria-label="Search"
                    />
                    <Button
                        className='appbarbutton__'
                    >Search</Button>
                </Form>
            </Container>
        </Navbar >
    )
}

export default AppBar