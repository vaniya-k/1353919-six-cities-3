import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import placesListing from './mocks/places-listing.js';

ReactDOM.render(
    <App foundPlacesQnt={placesListing.foundPlacesQnt} places={placesListing.places}/>,
    document.getElementById(`root`)
);
