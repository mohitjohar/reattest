import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, Collapse } from 'reactstrap';
import Logoimg from '../img/pdt-logo.png';

const Header = ({ props }) => {
  if (!localStorage.token) {
    props.history.push('/login');
  }
  // User dropdown desk
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  // User dropdown mobi
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle1 = () => setDropdownOpen1(prevState => !prevState);

  // Collapse
  const [isOpen, setIsOpen] = useState(false);
  const toggle2 = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="navbar-absolute header-top">
        <nav className="navbar navbar-expand-lg navbar-transparent justify-content-between mb-0">
          <div className="container">
            <ul className="left-side navbar-nav">
              <li className="nav-item">
                <Link to="/dashboard">
                  <img src={Logoimg} className="logo2" alt="logo" />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav right-side">
              <li className="nav-item">
                <Link to>
                  <i className="fa fa-clock-o" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to>
                  <i className="fa fa-star" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard">
                  <i className="fa fa-home" />
                </Link>
              </li>
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                className="dropdown d-none d-lg-block nav-item"
              >
                <DropdownToggle
                  caret
                  className="btn btn-transparent text-white nav-link"
                >
                  <i className="fa fa-user" /> &nbsp;&nbsp; Murray McC
                </DropdownToggle>

                <DropdownMenu id="dropdownMenuButton">
                  <Link to>
                    <i className="fa fa-user" />
                    &nbsp;&nbsp; Profile
                  </Link>
                  <Link to>
                    <i className="fa fa-cog" />
                    &nbsp;&nbsp; Settings
                  </Link>
                  <Link to="/adduser">
                    <i className="fa fa-user-plus" />
                    &nbsp;&nbsp; Add User
                  </Link>
                  <Link to="/logout">
                    <i className="fa fa-sign-out" aria-hidden="true" />
                    &nbsp;&nbsp; Logout
                  </Link>
                </DropdownMenu>
              </Dropdown>
            </ul>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg mb-0 bg-blackt">
          <div className="container">
            <button
              className="navbar-toggler pull-left"
              onClick={toggle2}
              type="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar" />
              <span className="navbar-toggler-icon icon-bar" />
              <span className="navbar-toggler-icon icon-bar" />
            </button>

            <Dropdown
              isOpen={dropdownOpen1}
              toggle={toggle1}
              className="dropdown pull-right d-lg-none d-md-block"
            >
              <DropdownToggle
                caret
                className="btn btn-transparent text-white nav-link"
              >
                <i className="fa fa-user" /> &nbsp; Murray McC
              </DropdownToggle>

              <DropdownMenu id="dropdownMenuButtonm">
                <Link to>
                  <i className="fa fa-user" />
                  &nbsp; Profile
                </Link>
                <Link to>
                  <i className="fa fa-cog" />
                  &nbsp;Settings
                </Link>
                <Link to="/adduser">
                  <i className="fa fa-user-plus" />
                  &nbsp;Add User
                </Link>
                <Link to="/logout">
                  <i className="fa fa-sign-out" aria-hidden="true" />
                  &nbsp; Logout
                </Link>
              </DropdownMenu>
            </Dropdown>

            <Collapse
              isOpen={isOpen}
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/inspections">Inspections</Link>
                </li>
                <li className="nav-item">
                  <Link to="/map">Site Info</Link>
                </li>
                <li className="nav-item">
                  <Link to>Reports</Link>
                </li>
                <li className="nav-item">
                  <Link to>Analytics</Link>
                </li>
                <li className="nav-item">
                  <Link to>
                    Support &nbsp;&nbsp;
                    <i className="fa fa-phone" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to>
                    feedback &nbsp;&nbsp; <i className="fa fa-comment" />
                  </Link>
                </li>
              </ul>
            </Collapse>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
