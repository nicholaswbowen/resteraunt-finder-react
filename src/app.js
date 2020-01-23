import './app.scss';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import List from './components/list';
import SearchBar from './components/search-bar';
import LocationToggle from './components/location-toggle';
import Map from './components/map-view';
import ToggleSwitch from './components/toggle-switch';

import { getResterauntsFromCoordsActionCreator } from './state/reducers/resteraunts/resteraunts.actions';
import useWindowDimensions from './util/useWindowDimensions';

function App({ coords, dispatch }) {
  const { height, width } = useWindowDimensions();
  const adjustedHeight = height-110; // 110 is the height of the navbar.
  const isMobile = width <= 640;
  const mediaClass = isMobile ? 'mobile' : 'desktop';

  const [forceShowMap, setforceShowMap] = useState(false);
  useEffect(() => {
    getResterauntsFromCoordsActionCreator(dispatch, coords);
  });
  return (
    <>
      <div className="top-nav">
        <LocationToggle />
          <ToggleSwitch
            onClick={() => setforceShowMap(!forceShowMap)}
            enabled={forceShowMap}
            text="Show on Map"
          />
        <SearchBar />
      </div>
      <div className={`main-container ${mediaClass}`}>
        { !forceShowMap ? <List className={`list-container ${mediaClass}`} isMobile={isMobile}/> : null}
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtDfUicswx55w6oJ8GuW3lqa3I-YBJXVU&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: adjustedHeight, visibility: `${forceShowMap || !isMobile ? 'visible' : 'hidden'}` }} className={`map-container ${mediaClass}`} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
}


function mapStateToProps({ location: { currentCoords }}) {
  return {
    coords: currentCoords
  }
}


export default connect(mapStateToProps)(App);
