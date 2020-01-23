import { combineReducers } from 'redux';
import location from './reducers/location/location.reducer';
import resteraunts from './reducers/resteraunts/resteraunts.reducer';

export default combineReducers({
  location,
  resteraunts
});
