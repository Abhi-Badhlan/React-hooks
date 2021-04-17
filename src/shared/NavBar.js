import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import { Nav } from 'react-bootstrap';
export const NavBar=()=>{
    return(
    <Nav>
  <Nav.Item>
    <Nav.Link href="/home">home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/login" eventKey="link-1">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/signUP" eventKey="link-2">SignUp</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav> 
    );
}

