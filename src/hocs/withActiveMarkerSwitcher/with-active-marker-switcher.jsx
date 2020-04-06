import React from 'react';
import CityMap from '../../components/city-map/city-map-with-hoc.jsx';

const withActiveMarkerSwitcher = (Component) => {
  class ActiveMarkerSwitcher extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeMarkerHoc: null
      }
    }

    setActiveMarker = (markerLatLon) => {
      this.setState({
        activeMarkerHoc: markerLatLon
      })
    }

    render() {
      return <Component {...this.props} activeMarkerHoc={this.state.activeMarkerHoc} onActiveMarkerChange={this.setActiveMarker}/>
    }
  }

  return ActiveMarkerSwitcher;
}

export default withActiveMarkerSwitcher(CityMap);
