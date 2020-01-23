import debounce from 'debounce';

export const getResterauntsFromAddressActionCreator = debounce((dispatch, location) => {
  const yelpURL = `api.yelp.com/v3/businesses/search?location=${location}`;
  fetchNewResteraunts(yelpURL, dispatch);
}, 600);

export const getResterauntsFromCoordsActionCreator = debounce((dispatch, {lat, lng}) => {
  const yelpURL = `api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lng}`;
  fetchNewResteraunts(yelpURL, dispatch);
}, 600);

const fetchNewResteraunts = async (yelpURL, dispatch) => {
  const queryURL = `https://cors-anywhere.herokuapp.com/${yelpURL}`;
  const apiKey = "Xzn2DbrFgsSvKXaiAt1VZs8KR6VQcy9rStqZ7I537z16CG3Z32S_XDDPOtR2-jHeQDGRDnevlXsNs1ek7KrJLbR-0S-cTsCLGzz4k-hfoqt_j1Hfr3iF2TvIn3wnXnYx";

  try {
    dispatch({ type: 'GET_RESTERAUNTS_DATA_PENDING'});
    const response = await fetch(queryURL, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Authorization": `Bearer ${apiKey}`,
      },
    });
    const result = await response.json();
    dispatch({ type: 'GET_RESTERAUNTS_DATA_FUFILLED', payload: result.businesses });
  } catch (error){
    console.error(error);
    dispatch({ type: 'GET_RESTERAUNTS_DATA_FAILED', payload: error });
  }
}