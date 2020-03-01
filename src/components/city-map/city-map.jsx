import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
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

    const defaultPin = leaflet.icon({iconSize: [30, 30], iconUrl: `img/pin.svg`});

    const orangePin = leaflet.icon({iconSize: [30, 30], iconUrl: `img/pin-active.svg`});

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    placesCoordinates.forEach((place) => {
      leaflet
        .marker([place.lat, place.lon], {icon: defaultPin})
        .addTo(map);
    });

    if (activePlaceCoordinates) {
      leaflet
      .marker([activePlaceCoordinates.lat, activePlaceCoordinates.lon], {icon: orangePin})
      .addTo(map);
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

