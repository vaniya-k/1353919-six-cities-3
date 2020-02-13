import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import placesListing from './mocs/places-listing.js';

ReactDOM.render(
    <App foundPlacesQnt={placesListing.foundPlacesQnt} places={placesListing.places}/>,
    document.getElementById(`root`)
);
