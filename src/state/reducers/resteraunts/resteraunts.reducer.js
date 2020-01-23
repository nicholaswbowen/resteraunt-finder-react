const initialState = {
  data: [],
  pending: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESTERAUNTS_DATA_PENDING': 
      return {
        ...state,
        pending: true,
      }
    case 'GET_RESTERAUNTS_DATA_FUFILLED': 
      return {
        ...state,
        pending: false,
        data: action.payload
    }
    case 'GET_RESTERAUNTS_DATA_FAILED': 
    return {
      ...state,
      pending: false,
    }
   default:
    return state;
  }
 }