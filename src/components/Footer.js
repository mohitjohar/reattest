import React from 'react';
import { Link } from 'react-router-dom';
import Omnilogo from '../img/omnilogo.png';
import Saplogo from '../img/saplogo.png';

const Footer = () => {
  return (
    <>
      <ul className="pull-left navbar-nav">
        <li className="nav-item">
          <Link to="/">
            Supports Integration With{' '}
            <img src={Saplogo} className="logosap" alt="saplogo" />
          </Link>
        </li>
      </ul>
      <ul className="pull-right navbar-nav">
        <li className="nav-item">
          <Link to="/">
            Powered by{' '}
            <img src={Omnilogo} className="logo1" alt="logopowered" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Footer;
