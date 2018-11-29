import React,{Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavBar extends Component {
  render() {
    return (
        <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">
          <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" width="20%" alt="Docplanner Group"/>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Career</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Departments</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;