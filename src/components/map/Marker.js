import React from 'react';

const Marker1 = ({ img, img1 }) => {
  return (
    <div>
      {img ? <img src={img} alt="map-marker" /> : ''}
      {img1 ? <img src={img1} alt="map-marker" className="mapmarker1" /> : ''}
    </div>
  );
};

export default Marker1;
