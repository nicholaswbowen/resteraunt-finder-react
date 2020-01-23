import * as React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import { getResterauntsFromCoordsActionCreator } from '../../state/reducers/resteraunts/resteraunts.actions';


const MapWithAMarker = ({
  currentCoords,
  mapZoom,
  onMapMounted,
  onZoomChanged,
  onDragEnd,
  resteraunts = [],
}) => {
  return (
    <GoogleMap
      defaultZoom={mapZoom}
      center={currentCoords}
      ref={onMapMounted}
      onZoomChanged={onZoomChanged}
      mapZoom={mapZoom}
      onDragEnd={onDragEnd}
    >
    {resteraunts.map(({ id, name, url, coordinates: { latitude, longitude }  }) => (
        <Marker
          key={id}
          position={{ lat: latitude, lng: longitude }}
          title={name}
          onClick={()=> window.open(url, "_blank")}
        />
      ))}
    </GoogleMap>
  );
};

function mapStateToProps({
  location: { currentCoords, mapZoom },
  resteraunts: { data }
}){
  return {
    currentCoords,
    mapZoom,
    resteraunts: data
  }
} 

const hocs = compose(
  withScriptjs,
  withGoogleMap,
  connect(mapStateToProps),
  withHandlers(({ dispatch }) => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: () => () => dispatch({ type: 'SET_MAP_ZOOM', payload: refs.map.getZoom() }),
      onDragEnd: () => () => {
        const center = refs.map.getCenter();
        const coords = {
          lat: center.lat(),
          lng: center.lng(),
        } 
        dispatch({ type: 'SET_MAP_COORDS', payload: coords });
        getResterauntsFromCoordsActionCreator(dispatch, coords);
      }
      }
    }
  )
);

export default hocs(MapWithAMarker);
