import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class CityMap extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <section className="cities__map map">
      <div id="mapid" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    const {placesCoordinates} = this.props;

    const city = [52.38333, 4.9];

    const zoom = 12;

    const map = leaflet.map(`mapid`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    const Icon = leaflet.Icon.extend ({
      options: { iconSize: [30, 30]}
    });

    const defaultPin = new Icon ({iconUrl: `img/pin.svg`});

    const orangePin = new Icon ({iconUrl: `img/pin-orange.svg`});

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    placesCoordinates.forEach((place) => { if(place.isActive) {
      leaflet
        .marker([place.lat, place.lon], {icon: orangePin})
        .addTo(map);
      } else {
      leaflet
        .marker([place.lat, place.lon], {icon: defaultPin})
        .addTo(map);
      };
    });
  }
};

CityMap.propTypes = {
  placesCoordinates: PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
        isActive: PropTypes.bool.isRequired
      }).isRequired
  ).isRequired
};

export default CityMap;

