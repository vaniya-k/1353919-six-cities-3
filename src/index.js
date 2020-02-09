import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const foundPlacesQnt = 321;

ReactDOM.render(
    // eslint-disable-next-line react/prop-types
    <App foundPlacesQnt={foundPlacesQnt}/>,
    document.getElementById(`root`)
);
