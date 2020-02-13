import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const foundPlacesQnt = 321;
const places = [`Tiny cozy flat`, `Spacious apartment`, `Rustic cabin`, `Authentic fachwerk house`];

ReactDOM.render(
    <App foundPlacesQnt={foundPlacesQnt} places={places}/>,
    document.getElementById(`root`)
);
