import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import trackdimg from '../../img/trackd.png';
import engineimg from '../../img/engine-icon.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="map-header">
      <Navbar color="transparent" dark expand="sm">
        <NavbarBrand href>
          <img src={trackdimg} alt="trackd" />
        </NavbarBrand>
        {/* <NavbarToggler /> */}
        <button className="navbar-toggler d-md" onClick={toggle} type="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon icon-bar" />
          <span className="navbar-toggler-icon icon-bar" />
          <span className="navbar-toggler-icon icon-bar" />
        </button>
        <Collapse isOpen={isOpen} navbar className="mobi-nav d-md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href>
                <i className="fa fa-globe" />
                &nbsp; Monitoring
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-flag" /> &nbsp;Tracks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-comment" /> &nbsp;Reports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-street-view" /> &nbsp;Geofences
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-clock-o" /> &nbsp;Notification
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-user" /> &nbsp;Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <img src={engineimg} alt="engine-icon" /> Units
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href>
                <i className="fa fa-exclamation-triangle" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-ellipsis-v" aria-hidden="true" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>Murray McC</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
