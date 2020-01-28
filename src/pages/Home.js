import React, { useState } from 'react';
import Header from '../components/header/Header';
import Media from '../components/Media';

const Home = () => {
  return (
    <div className="page bg-gray">
      <Header />
      <div className="container pt-3 pb-3">
        <h2>Playlists</h2>
        <div className="media-wrapper">
          <Media />
          <hr className="divider" />
          <Media />
          <hr className="divider" />
          <Media />
          <hr className="divider" />
        </div>
      </div>
    </div>
  );
};

export default Home;
