import React from 'react'
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap'

const AppBar = ({ title }) => {
    return (
        <Navbar className='appbar__' bg="light p-4" >
            <Container fluid>
                <Navbar.Brand className='appbrand__' href="/">{title}</Navbar.Brand>
                <Nav className="mr-auto appnav__">
                    <Nav.Link href="#home" className='appnavlink__'>Home</Nav.Link>
                    <Nav.Link href="#features" className='appnavlink__'>Genre</Nav.Link>
                    <Nav.Link href="#features" className='appnavlink__'>Country</Nav.Link>
                    <Nav.Link href="#pricing" className='appnavlink__'>Coming Soon</Nav.Link>
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