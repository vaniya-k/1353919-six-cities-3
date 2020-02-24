import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import placesListing from './mocks/places-listing.js';
import placesFullData from './mocks/places-full-data.js';

ReactDOM.render(
    <App placesListing={placesListing} placePageData={placesFullData[0]}/>,
    document.getElementById(`root`)
);
