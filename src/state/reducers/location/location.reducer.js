import { zoomToRadius } from '../../../util/zoom-to-radius';

const mapZoom = 16;
const mapSearchRadius = zoomToRadius(mapZoom);

const initialState = {
  hasLocationEnabled: false,
  currentCoords: { lat: 39.758949, lng: -84.191605 },
  pending: false,
  error: false,
  mapZoom,
  mapSearchRadius,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAP_ZOOM': 
      // prevent a super ultra close up zoom.
      const mapZoom = action.payload <= 20 ? action.payload : 20;
      return {
        ...state,
        mapZoom,
        mapSearchRadius: zoomToRadius(mapZoom)
      }
    case 'SET_MAP_COORDS': 
      return {
        ...state,
        currentCoords: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      }
    case 'GET_LOCATION_PENDING':
      return {
        ...state,
        pending: true,
      }
    case 'GET_LOCATION_FUFILLED':
      return {
        ...state,
        hasLocationEnabled: true,
        pending: false,
        currentCoords: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      }
    case 'GET_LOCATION_REJECTED':
      return {  
        ...state,
        hasLocationEnabled: false,
        pending: false, 
        error: true,
      }
   default:
    return state;
  }
 }