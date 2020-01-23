import './location-toggle.scss';
import React from 'react';
import { connect } from 'react-redux';
import { getLocationActionCreator } from '../../state/reducers/location/location.actions';

export function LocationToggle({
  onClick
}) {
  return (
      <button
        className="location-toggle"
        onClick={onClick}
      >
      Use my Location
      </button>
    )
}

function mapDispatchToProps(dispatch){
  return {
    onClick: () => getLocationActionCreator(dispatch),
  }
}


export default connect(null, mapDispatchToProps)(LocationToggle);