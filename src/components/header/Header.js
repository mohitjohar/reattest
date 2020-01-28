import React, { useState } from 'react';
import refreshimg from '../../img/icon/feed-active.png';
import notificationimg from '../../img/icon/notification.png';
import discoverimg from '../../img/icon/mic.png';
import username from '../../img/icon/user.png';

const Header = () => {
  return (
    <header className="header1 bg-light-blue">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between p-3">
          <div className="brand">jifcast</div>
          <ul className="imgflex">
            <li>
              <img src={refreshimg} alt="" />
              <span>refresh</span>
            </li>
            <li>
              <img src={discoverimg} alt="" />
              <span>Discover</span>
            </li>
            <li>
              <img src={notificationimg} alt="" />
              <span>Notifications</span>
            </li>
            <li>
              <img src={username} alt="" />
              <span>username</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
