import React from 'react';
import logo from './Bridgelabz.png';
import { Container, Navbar } from 'react-bootstrap';
import './style.css';
import Logout from '../Logout';
function TopBar() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container className='topbar-container'>
          <Navbar.Brand href='/dashboard'>
            <img
              alt='logo'
              src={logo}
              width='40'
              height='40'
              className='d-inline-block align-top top-bar-logo'
            />
            <h5>Employee Management System</h5>
          </Navbar.Brand>
        </Container>
        <Logout />
      </Navbar>
    </>
  );
}

export default TopBar;
