import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import CustomerLoginContext from '../../context/CustomerLoginContext';
import { useContext } from 'react';

export default function Navbars() {
  const navigate = useNavigate();
  const { jwtToken, setJwtToken, custName } = useContext(CustomerLoginContext);
  const handleLogout = () =>{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfo');
    setJwtToken(null);
    navigate('/login');
    
  }
  return (
    
<Navbar collapseOnSelect expand="lg" className="navtest bg-body-tertiary">

    <Container>
    <Navbar.Brand className="nav-link-color" href="/">NCP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="nav-link-color" href="/">Home</Nav.Link>
        <Nav.Link className="nav-link-color" href="/about">About</Nav.Link>
        <Nav.Link className="nav-link-color" href="/contact">Contact</Nav.Link>
        <Nav.Link className="nav-link-color" href="/faq">FAQ</Nav.Link>
        {
        jwtToken && (<Nav.Link className="nav-link-color" href="/dashboard">Dashboard</Nav.Link>)
}
        </Nav>
       { 
       jwtToken ?(
        <NavDropdown title={custName} id="basic-nav-dropdown" className="dropdown-color">
        <NavDropdown.Item href="/report">Your Report</NavDropdown.Item>
        <NavDropdown.Item href="/profile">Update Details</NavDropdown.Item>
        {/* <NavDropdown.Item href="/offer">Your Offers</NavDropdown.Item> */}
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
      </NavDropdown>
       ):(
      <Nav>
        <Nav.Link className="nav-link-color" href="/register">Register</Nav.Link>
        <Nav.Link className="nav-link-color" href="/login">
          Login
        </Nav.Link>
      </Nav>
       )
}
    </Navbar.Collapse>
  </Container>
</Navbar>





  );
}
