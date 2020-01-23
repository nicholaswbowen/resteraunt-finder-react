import 'react-google-places-autocomplete/dist/assets/index.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { getResterauntsFromAddressActionCreator } from '../../state/reducers/resteraunts/resteraunts.actions';
import GooglePlacesAutocomplete, { getLatLng, geocodeByPlaceId } from 'react-google-places-autocomplete';

export function SearchBar({ onChange, currentCoords, mapSearchRadius }){
    return (
      <GooglePlacesAutocomplete
        onSelect={onChange}
        placeholder="Address, location, landmark, etc"
        autocompletionRequest={{
          location: currentCoords,
          radius: mapSearchRadius
        }}
      />
    )
}

function mapStateToProps({ location: { currentCoords, mapSearchRadius } }){
  return { currentCoords, mapSearchRadius };
}

function mapDispatchToProps(dispatch){
  return {
    onChange: (place) => {
      getResterauntsFromAddressActionCreator(dispatch, place.description)
      geocodeByPlaceId(place.place_id)
        .then(results => getLatLng(results[0]))
        .then((coords) =>
          dispatch({ type: 'SET_MAP_COORDS', payload: coords })
        );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);