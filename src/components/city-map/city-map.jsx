import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      markers: null,
      activeMarker: null,
      map: null
    };
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  renderMarkers = (placesCoordinates, activePlaceCoordinates, map) => {
    const markers = [];

    placesCoordinates.forEach((place) => {
      const marker = leaflet
        .marker([place.lat, place.lon], {icon: leaflet.icon({iconSize: [30, 30], iconUrl: `img/pin.svg`})})
        .addTo(map);

      markers.push(marker);
    });

    this.setState({
      markers: markers
    });

    if (activePlaceCoordinates) {
      const activeMarker = leaflet
      .marker([activePlaceCoordinates.lat, activePlaceCoordinates.lon], {icon: leaflet.icon({iconSize: [30, 30], iconUrl: `img/pin-active.svg`})})
      .addTo(map);

      this.setState({
        activeMarker: activeMarker
      });
    }
  }

  render() {
    const {sectionLocationClass} = this.props;

    return <section className={`${sectionLocationClass} map`}>
      <div id="mapid" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    const {placesCoordinates, activePlaceCoordinates} = this.props;

    const city = [52.38333, 4.9];

    const zoom = 12;

    const map = leaflet.map(`mapid`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.setState({
      map: map
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.renderMarkers(placesCoordinates, activePlaceCoordinates, map);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const map = this.state.map;

      const {placesCoordinates, activePlaceCoordinates} = this.props;

      this.state.markers.forEach((marker) => map.removeLayer(marker));

      this.renderMarkers(placesCoordinates, activePlaceCoordinates, map);
    }
  }
}

CityMap.propTypes = {
  sectionLocationClass: PropTypes.string.isRequired,
  placesCoordinates: PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired
      }).isRequired
  ).isRequired,
  activePlaceCoordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  })
};

export default CityMap;

