import { getResterauntsFromCoordsActionCreator } from '../resteraunts/resteraunts.actions'

export const getLocationActionCreator = (dispatch) => {
  const success = ({ coords: {latitude, longitude} }) => {
    const currentCoords = {
      lat: latitude,
      lng: longitude,
    }
    dispatch({ type: 'GET_LOCATION_FUFILLED', payload: currentCoords });
    getResterauntsFromCoordsActionCreator(dispatch, currentCoords);
  };
  const failure = () => dispatch({ type: 'GET_LOCATION_FAILED' });
  dispatch({ type: 'GET_LOCATION_PENDING' });
  navigator.geolocation.getCurrentPosition(success, failure);
}