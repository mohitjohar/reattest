import React, { useState } from 'react';
import { Progress } from 'reactstrap';
import Pathimg from '../img/icon/Path.png';
import heartimg from '../img/icon/heart.png';
import cloudimg from '../img/icon/cloud.png';

const Media = ({ img, h5, h3, heart, notifi, progress1, text }) => {
  return (
    <div className="media">
      <img src={img} className="img" alt="" />
      <div className="content">
        <h5>{h5}</h5>
        <h3>{h3}</h3>
        <p className="mb-2">{text}</p>
        <div className="d-flex align-items-center justify-content-between">
          <ul className="imgflex">
            <li className="d-flex">
              <img src={heartimg} alt="" />
              <span>{heart}</span>
            </li>
            <li className="d-flex">
              <img src={Pathimg} alt="" />
              <span>{notifi}</span>
            </li>
            <li className="d-flex">
              <img src={cloudimg} alt="" />
            </li>
          </ul>
          <div className="progress-wrapper">
            <Progress color="info" value={50} />
            <span>{progress1}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Media;
