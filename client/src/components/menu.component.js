import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

export default class Menu extends Component {

    render() {
        return (


            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">100 Original</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Item><Link to="/list" className="nav-link">Watch List</Link></Nav.Item>
                    <Nav.Item><Link to="/add" className="nav-link">Create Watch</Link></Nav.Item>

                </Nav>
            </Navbar>


        )

    }

}
