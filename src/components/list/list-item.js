import * as React from 'react';
import Rating from './rating';

function ListItem({ isMobile,
    resteraunt: {
    name,
    url,
    rating,
    review_count,
    price,
    categories,
    image_url,
    location: { display_address }
} }){
    const locationLine = display_address.join(' ');
    return (
        <div className={`list-item ${isMobile ? 'mobile' : ''}`}>
            <div className="info-section">
                <a href={url} className="resteraunt-title">{name}</a>
                <ul className="subtitle-list">
                    <li><strong>{rating}</strong></li>
                    <li><Rating rating={rating} totalReviews={review_count}/></li>
                    <li>({review_count})</li>
                    <li>{price}</li>
                    <li>{categories[0].title}</li>
                </ul>
                <div className="location-line">{locationLine}</div>
            </div>
            {isMobile ? null : <div className="photo-section"><img src={image_url} height="150px"/></div>}
        </div>
    );
};

export default ListItem;

// TODO: delete this or decide to use it. 
// const reduceLocationToString = (location) => {
//     const keys = Object.keys(location);
//     return keys.reduce((acc, key) => {
//         const entry = location[key];
//         if(entry){
//             return acc+entry+', '
//         }
//         return acc;
//     }, '')
// } 