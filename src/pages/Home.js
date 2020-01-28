import React, { useState } from 'react';
import Header from '../components/header/Header';
import img from '../img/icon/img.png';
import img1 from '../img/icon/img1.png';
import Media from '../components/Media';

const playlists = [
  {
    img,
    h5: 'JoeRogan',
    h3: 'JRE MMA Show #75 wit',
    text: 'Joe is joined by for',
    heart: 84,
    notifi: 96,
    progress: 48
  },
  {
    img: img1,
    h5: 'myfavoritemurder',
    h3: 'MFM Minisode 13',
    text: 'This week’s hometown',
    heart: 43,
    notifi: 87,
    progress: 79
  },
  {
    img,
    h5: 'JoeRogan',
    h3: 'JRE MMA Show #75 wit',
    text: 'This week’s hometown',
    heart: 84,
    notifi: 96,
    progress: 48
  }
];

const Home = () => {
  return (
    <div className="page bg-gray">
      <Header />
      <div className="container pt-3 pb-3">
        <h2>Playlists</h2>
        <div className="media-wrapper">
          {playlists.map(list => {
            return (
              <>
                <Media
                  img={list.img}
                  h5={list.h5}
                  h3={list.h3}
                  text={list.text}
                  heart={list.heart}
                  notifi={list.notifi}
                  progress1={list.progress}
                />
                <hr className="divider" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
