import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const IconParams = {
  SIZE: [30, 30],
  ACTIVE_URL: `/img/pin-active.svg`,
  NON_ACTIVE_URL: `/img/pin.svg`
};

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  markers = null;

  mapObj = null;

  activeMarker = null;

  componentDidMount() {
    const {placesCoordinates, activePlaceCoordinates, cityLatLon, placePageCoordinates} = this.props;

    const city = [cityLatLon.lat, cityLatLon.lon];

    const zoom = 12;

    const map = leaflet.map(`mapid`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.mapObj = map;

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    if (placePageCoordinates) {
      leaflet
      .marker([placePageCoordinates.lat, placePageCoordinates.lon], {icon: leaflet.icon({iconSize: IconParams.SIZE, iconUrl: IconParams.ACTIVE_URL})})
      .addTo(map);
    }

    this.renderMarkers(placesCoordinates, activePlaceCoordinates, map);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const map = this.mapObj;

      map.setView([this.props.cityLatLon.lat, this.props.cityLatLon.lon], 13);

      const {placesCoordinates, activePlaceCoordinates} = this.props;

      this.markers.forEach((marker) => map.removeLayer(marker));

      if (this.activeMarker !== null) {
        map.removeLayer(activeMarker);
      }

      this.renderMarkers(placesCoordinates, activePlaceCoordinates, map);
    }
  }

  renderMarkers = (placesCoordinates, activePlaceCoordinates, map) => {

    const markers = [];

    placesCoordinates.forEach((place) => {
      const marker = leaflet
        .marker([place.lat, place.lon], {icon: leaflet.icon({iconSize: IconParams.SIZE, iconUrl: IconParams.NON_ACTIVE_URL})})
        .addTo(map);

      markers.push(marker);
    });

    this.markers = markers;

    let tempActiveMarker = null;

    if (activePlaceCoordinates.lat !== null && activePlaceCoordinates.lon !== null) {
      this.tempActiveMarker = leaflet
        .marker([activePlaceCoordinates.lat, activePlaceCoordinates.lon], {icon: leaflet.icon({iconSize: IconParams.SIZE, iconUrl: IconParams.ACTIVE_URL})})
        .addTo(map);
    };

    this.activeMarker = tempActiveMarker
  }

  render() {
    const {sectionLocationClass} = this.props;

    return <section className={`${sectionLocationClass} map`}>
      <div id="mapid" style={{width: `100%`, height: `100%`}}></div>
    </section>;
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
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  cityLatLon: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  }).isRequired,
  placePageCoordinates: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  })
};

export default CityMap;

