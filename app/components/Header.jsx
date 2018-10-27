import React from 'react';
import { Navbar, NavItem,Nav,NavDropdown,MenuItem } from 'react-bootstrap';


class Header extends React.Component {
    constructor() {
      super();
     
    }
   
    render() {
      return (
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Code.Hub
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            DashBoard
          </NavItem>
          <NavItem eventKey={2} href="#">
            Courses
          </NavItem>
          <NavItem eventKey={2} href="#">
            Add Course
          </NavItem>
         
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
    }
   }
   
   export default Header;