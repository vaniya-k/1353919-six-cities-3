import React from 'react';

export const withActiveCardSwitcher = (Component) => {
  return class ActiveCardSwitcher extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activePlaceLatLon: null
      };
      this.handleHover = this.handleHover.bind(this);
    }

    handleHover(placeLatLon) {
      const value = (placeLatLon === this.state.activePlaceLatLon) ? null : placeLatLon;
      this.setState({activePlaceLatLon: value});
    }

    render() {
      return <Component {...this.props} handleHover={this.handleHover}/>;
    }
  };
};
