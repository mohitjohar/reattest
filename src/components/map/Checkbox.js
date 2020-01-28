import React from 'react';
import engineimg from '../../img/engine-icon.png';
import azIcon from '../../img/AZ.png';

const Checkbox = ({
  asset,
  setAsset,
  data,
  setMap,
  className,
  text,
  value,
  setAllChange,
  close,
  top
}) => {
  return (
    <div
      className={
        className
          ? `d-flex align-items-center map-fliter justify-content-between ${className}`
          : 'd-flex align-items-center map-fliter justify-content-between'
      }
    >
      <div className="d-inline-flex align-items-center">
        {/* All units checkbox toogle icon */}
        {text ? (
          <a href className="nav-link">
            <input
              type="checkbox"
              className="minus"
              onClick={() => {
                setAsset(!asset);
              }}
              checked={asset}
            />
          </a>
        ) : (
          ''
        )}

        {/* All units checkbox */}
        {setAllChange ? (
          <a href className="nav-link">
            <input type="checkbox" checked={value} onClick={setAllChange} />
          </a>
        ) : (
          <a href className="nav-link">
            <input
              type="checkbox"
              checked={asset}
              onClick={() => setAsset(!asset)}
            />
          </a>
        )}

        {/* All units checkbox text */}
        {text ? (
          <a href onClick={() => setAsset(!asset)} className="nav-link">
            {top ? (
              <img
                src={azIcon}
                alt="az-icon"
                onClick={() => setAsset(!asset)}
              />
            ) : (
              <img src={engineimg} alt="engine-icon" className="black" />
            )}
            &nbsp;{text}
          </a>
        ) : (
          <a href className="nav-link" onClick={() => setMap(data)}>
            <i className="fa fa-square text-yellow" />
            &nbsp;
            {data.name}
          </a>
        )}
      </div>
      <div className="d-inline-flex align-items-center">
        {/* center and zoom location */}
        {setMap ? (
          <a href className="nav-link" onClick={() => setMap(data)}>
            <i className="fa fa-crosshairs" />
          </a>
        ) : (
          ''
        )}

        {/* Top comment icon */}
        {top ? (
          <a href="#" className="nav-link">
            <i className="fa fa-comment" />
          </a>
        ) : (
          <a href className="nav-link">
            <i className="fa fa-chevron-circle-down" />
          </a>
        )}

        {/* close function */}
        {close ? (
          <a href className="nav-link" onClick={() => close()}>
            <i className="fa fa-times" />
          </a>
        ) : (
          <a href className="nav-link">
            <i className="fa fa-times" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
