import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const AppBar = ({ title }) => {
    return (
        <Navbar className='appbar__' bg="light p-4" >
            <Container fluid>
                <Navbar.Brand className='appbrand__' href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar >
    )
}

export default AppBar