import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Collapse } from 'reactstrap';
import Checkbox from '../components/map/Checkbox';
import Marker1 from '../components/map/Marker';
import mapmarker from '../img/map-marker.png';
import mapmarkergreen from '../img/map-marker-green.png';
import mapmarkerpurple from '../img/map-marker-purple.png';
import mapmarkerpink from '../img/map-marker-pink.png';
import mapmarkerblue from '../img/map-marker-blue.png';
import mapmarkerorange from '../img/map-marker-orange.png';
import azIcon from '../img/AZ.png';
import Header from '../components/map/Header';

const Map1 = p => {
  if (!localStorage.token) {
    p.history.push('/login');
  }

  const [center, setCenter] = useState({
    lat: -25.2743988,
    lng: 133.7751312
  });

  // PCA Toggle
  const [isOpenPca, setIsOpenPca] = useState(false);
  const togglePca = () => setIsOpenPca(!isOpenPca);

  // Parent Div
  const [isOpenP, setIsOpenP] = useState(true);
  const toggleP = () => setIsOpenP(!isOpenP);

  // Child Div
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [value, setValue] = useState(false);
  const [asset1, setAsset1] = useState(false);
  const [asset2, setAsset2] = useState(false);
  const [asset3, setAsset3] = useState(false);
  const [asset4, setAsset4] = useState(false);
  const [asset5, setAsset5] = useState(false);
  const [asset6, setAsset6] = useState(false);
  const [asset7, setAsset7] = useState(false);
  const [asset8, setAsset8] = useState(false);
  const [asset9, setAsset9] = useState(false);
  const [asset10, setAsset10] = useState(false);
  const [asset11, setAsset11] = useState(false);
  const [zoom, setZoom] = useState(5);
  const assetSets = () => {
    setAsset1(!value);
    setAsset2(!value);
    setAsset3(!value);
    setAsset4(!value);
    setAsset5(!value);
    setAsset6(!value);
    setAsset7(!value);
    setAsset8(!value);
    setAsset9(!value);
    setAsset10(!value);
    setAsset11(!value);
    setValue(!value);
  };

  const setAllChange = () => {
    assetSets();
    return false;
  };

  const [data1, setData1] = useState([
    { id: 0, zoom: 5, lat: -25.2743988, lng: 133.7751312, name: 'australia' },
    { id: 1, zoom: 10, lat: -31.951241, lng: 115.863996, name: 'WAIO' },
    { id: 2, zoom: 10, lat: -23.353845, lng: 119.740274, name: 'WAIO' },
    { id: 3, zoom: 10, lat: -31.949648, lng: 115.85977, name: 'WAIO & NEC' },
    { id: 4, zoom: 10, lat: -33.641996, lng: 137.849633, name: 'OD' },
    { id: 5, zoom: 10, lat: -36.83707, lng: 144.62074, name: 'OD' },
    { id: 6, zoom: 10, lat: -39.126077, lng: 145.664197, name: 'asset6' },
    { id: 7, zoom: 10, lat: -32.285261, lng: 150.90002, name: 'NEC' },
    { id: 8, zoom: 10, lat: -27.465972, lng: 153.024744, name: 'BMA & BMC' },
    { id: 9, zoom: 10, lat: -23.522125, lng: 148.797829, name: 'BMA' },
    { id: 10, zoom: 10, lat: -20.84826, lng: 148.517602, name: 'BMC' },
    {
      id: 11,
      zoom: 10,
      lat: -21.931872,
      lng: 114.1,
      name: 'BHP Petroleum'
    }
  ]);

  const pcaData = {
    zoom: 5,
    lat: -27.465972,
    lng: 153.024744,
    name: 'PCA'
  };

  const setMapPCA = e => {
    setZoom(e.zoom);
    setCenter({
      lat: e.lat,
      lng: e.lng
    });
    setIsOpenPca(true);
  };

  const setMap = e => {
    setZoom(e.zoom);
    setCenter({
      lat: e.lat,
      lng: e.lng
    });

    if (e.id === 1) {
      setAsset1(true);
    } else if (e.id === 2) {
      setAsset2(true);
    } else if (e.id === 3) {
      setAsset3(true);
    } else if (e.id === 4) {
      setAsset4(true);
    } else if (e.id === 5) {
      setAsset5(true);
    } else if (e.id === 6) {
      setAsset6(true);
    } else if (e.id === 7) {
      setAsset7(true);
    } else if (e.id === 8) {
      setAsset8(true);
    } else if (e.id === 9) {
      setAsset9(true);
    } else if (e.id === 10) {
      setAsset10(true);
    } else if (e.id === 11) {
      setAsset11(true);
    }
  };

  console.log('center ', center, 'Zoom', zoom);
  return (
    <>
      <Header props={p} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3 p-0 gray-bg">
            <div className="map-left-sidebar">
              <div className="d-flex align-item-center map-fliter">
                <div className="nav-link w-100">
                  <input
                    type="text"
                    placeholder="Search"
                    className="control-search"
                  />
                  <i className="fa fa-search position-absolute" />
                </div>
                <a href="#" className="nav-link">
                  <i className="fa fa-ellipsis-v" aria-hidden="true" />
                </a>
              </div>

              {/* Top Checkbox */}
              <Checkbox
                asset={isOpenP} // checkbox state
                setAsset={setIsOpenP} // setchackbox state
                className="filter1"
                setMap={setMap} // zoom and center map on selected location
                data={data1[0]} // it have lat, log and name
                text // text for this section
                top // is it top section
              />
              <Collapse isOpen={isOpenP}>
                {/* All Units */}
                <Checkbox
                  asset={isOpen}
                  setAsset={setIsOpen}
                  value={value} //
                  setAllChange={setAllChange}
                  className="filter2"
                  close={() => setIsOpenP(false)} // close function
                  text="All Units"
                />

                <Collapse isOpen={isOpen}>
                  {/* Asset 1 */}
                  <Checkbox
                    asset={asset1}
                    setAsset={setAsset1}
                    setMap={setMap}
                    data={data1[1]}
                    className="filter3"
                  />

                  {/* Asset 2 */}
                  <Checkbox
                    asset={asset2}
                    setAsset={setAsset2}
                    setMap={setMap}
                    data={data1[2]}
                    className="filter3"
                  />

                  {/* Asset 3 */}
                  <Checkbox
                    asset={asset3}
                    setAsset={setAsset3}
                    setMap={setMap}
                    data={data1[3]}
                    className="filter3"
                  />

                  {/* Asset 4 */}
                  <Checkbox
                    asset={asset4}
                    setAsset={setAsset4}
                    setMap={setMap}
                    data={data1[4]}
                    className="filter3"
                  />

                  {/* Asset 5 */}
                  <Checkbox
                    asset={asset5}
                    setAsset={setAsset5}
                    setMap={setMap}
                    data={data1[5]}
                    className="filter3"
                  />

                  {/* Asset 6 */}
                  <Checkbox
                    asset={asset6}
                    setAsset={setAsset6}
                    setMap={setMap}
                    data={data1[6]}
                    className="filter3"
                  />

                  {/* Asset 7 */}
                  <Checkbox
                    asset={asset7}
                    setAsset={setAsset7}
                    setMap={setMap}
                    data={data1[7]}
                    className="filter3"
                  />

                  {/* Asset 8 */}
                  <Checkbox
                    asset={asset8}
                    setAsset={setAsset8}
                    setMap={setMap}
                    data={data1[8]}
                    className="filter3"
                  />

                  {/* Asset 9 */}
                  <Checkbox
                    asset={asset9}
                    setAsset={setAsset9}
                    setMap={setMap}
                    data={data1[9]}
                    className="filter3"
                  />

                  {/* Asset 10 */}
                  <Checkbox
                    asset={asset10}
                    setAsset={setAsset10}
                    setMap={setMap}
                    data={data1[10]}
                    className="filter3"
                  />

                  {/* Asset 11 */}
                  <Checkbox
                    asset={asset11}
                    setAsset={setAsset11}
                    setMap={setMap}
                    data={data1[11]}
                    className="filter3"
                  />
                </Collapse>
              </Collapse>

              {/* PCA */}
              <Checkbox
                asset={isOpenPca}
                setAsset={togglePca}
                setMap={setMapPCA}
                data={pcaData}
                className="filter3"
              />
            </div>
          </div>
          <div className="col-lg-10 col-md-9 p-0">
            <div
              style={{ height: '100vh', width: '100%', position: 'relative' }}
              className="mobimap"
            >
              <GoogleMapReact
                options={function(maps) {
                  return { mapTypeId: 'hybrid' };
                }}
                center={center}
                zoom={zoom}
                bootstrapURLKeys={{
                  key: 'AIzaSyB2RgWanHLf385ziPuRTY2d19hZAWVHbYs'
                }}
              >
                {asset1 && (
                  <Marker1
                    img={mapmarkerblue}
                    lat={data1[1].lat}
                    lng={data1[1].lng}
                  />
                )}
                {asset2 && (
                  <Marker1
                    img={mapmarkerblue}
                    lat={data1[2].lat}
                    lng={data1[2].lng}
                  />
                )}
                {asset3 && (
                  <Marker1
                    img={mapmarkerblue}
                    lat={data1[3].lat}
                    lng={data1[3].lng}
                  />
                )}
                {asset4 && (
                  <Marker1
                    img={mapmarkerorange}
                    lat={data1[4].lat}
                    lng={data1[4].lng}
                  />
                )}
                {asset5 && (
                  <Marker1
                    img={mapmarkerorange}
                    lat={data1[5].lat}
                    lng={data1[5].lng}
                  />
                )}
                {asset6 && (
                  <Marker1
                    img={mapmarkerpurple}
                    lat={data1[6].lat}
                    lng={data1[6].lng}
                  />
                )}
                {asset7 && (
                  <Marker1
                    img={mapmarkergreen}
                    lat={data1[7].lat}
                    lng={data1[7].lng}
                  />
                )}
                {asset8 && (
                  <Marker1
                    img={mapmarker}
                    img1={mapmarkerpink}
                    lat={data1[8].lat}
                    lng={data1[8].lng}
                  />
                )}
                {asset9 && (
                  <Marker1
                    img={mapmarkerpink}
                    lat={data1[9].lat}
                    lng={data1[9].lng}
                  />
                )}
                {asset10 && (
                  <Marker1
                    img={mapmarker}
                    lat={data1[10].lat}
                    lng={data1[10].lng}
                  />
                )}
                {asset11 && (
                  <Marker1
                    img={mapmarkerpurple}
                    lat={data1[11].lat}
                    lng={data1[11].lng}
                  />
                )}
                {isOpenPca && (
                  <Marker1
                    img={mapmarker}
                    lat={data1[7].lat}
                    lng={data1[7].lng}
                  />
                )}
                {isOpenPca && (
                  <Marker1
                    img={mapmarker}
                    lat={data1[8].lat}
                    lng={data1[8].lng}
                  />
                )}
                {isOpenPca && (
                  <Marker1
                    img={mapmarker}
                    lat={data1[9].lat}
                    lng={data1[9].lng}
                  />
                )}
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map1;
