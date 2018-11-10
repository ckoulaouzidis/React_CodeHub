import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="navbar-item brand-text">CodeHub DashBoard</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              componentClass={Link}
              to="/courses"
              href="/courses"
              active={location.pathname === "/courses"}
            >
              Courses
        </NavItem>
            <Nav pullRight>
              <NavItem
                componentClass={Link}
                to="/add-course"
                href="/add-course"
                active={location.pathname === "/add-course"}
              >
                Add new course
            </NavItem>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;