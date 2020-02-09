import React from 'react';
import Main from '../main/main.jsx';

export default class App extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return <Main foundPlacesQnt={this.props.foundPlacesQnt}/>;
  }
}
