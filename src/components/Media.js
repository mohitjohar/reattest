import React, { useState } from 'react';
import { Progress } from 'reactstrap';
import Pathimg from '../img/icon/Path.png';
import heartimg from '../img/icon/heart.png';
import cloudimg from '../img/icon/cloud.png';
import img from '../img/icon/img.png';

const Media = () => {
  return (
    <div className="media">
      <img src={img} className="img" alt="" />
      <div className="content">
        <h5>JoeRogan</h5>
        <h3>JRE MMA Show #75 wit</h3>
        <p>Joe is joined by for</p>
        <div className="d-flex align-items-center justify-content-between">
          <ul className="imgflex">
            <li className="d-flex">
              <img src={heartimg} alt="" />
              <span>84</span>
            </li>
            <li className="d-flex">
              <img src={Pathimg} alt="" />
              <span>96</span>
            </li>
            <li className="d-flex">
              <img src={cloudimg} alt="" />
            </li>
          </ul>
          <div className="progress-wrapper">
            <Progress color="info" value={50} />
            <span>97%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Media;
