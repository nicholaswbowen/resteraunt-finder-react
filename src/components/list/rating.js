
import React from 'react';
import Ratings from 'react-ratings-declarative';

export default ({ rating = 0 }) => (
// This implementation is actually against Yelps TOC, whoops. Chocolate colored stars for now!
// TODO: Make premade react-yelp-rating-widget using their provided assets https://www.yelp.com/developers/display_requirements
    <Ratings
      rating={rating}
      widgetRatedColors="chocolate"
      widgetSpacings="1px"
      widgetDimensions="15px"
    >
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
);