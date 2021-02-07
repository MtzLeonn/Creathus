import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import './styles.css';

export default function NavbarComponent() {

    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="Logo Creathus"
            src={logo}
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
      </Navbar>
      </>
    );
}