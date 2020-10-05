import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'


const Header = ({displayName}) => {
    return (
        <div  className="navContainer">
        <Container>
            <Navbar expand="lg" style={{ boxShadow: "none" }}>
                <Link to="/home">
                    <Navbar.Brand> <img src={logo} alt="" style={{ width: "200px"}}/></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="mx-right">
                    <Nav>
                        <Nav.Link href='/home' className='navText'>Home</Nav.Link>
                        <Nav.Link href='/donnation' className='navText'>Donnations</Nav.Link>
                        <Nav.Link href='/event' className='navText'>Event</Nav.Link>
                        <Nav.Link href='/blog' className='navText'>Blog</Nav.Link>
                        {
                            displayName? 
                                <b>{displayName}</b>
                                :
                                <div>
                                    <Link to='/register'><Button className='btn btn-primary homeBtn'>Register</Button></Link>
                                    <Link to='/adminHome'><Button className='btn btn-dark homeBtn'>Admin</Button></Link>
                                </div>
                        }
                        

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container>
        </div>
    );
};

export default Header;