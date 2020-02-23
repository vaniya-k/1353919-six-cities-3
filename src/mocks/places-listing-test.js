const placeTypes = [`Apartment`, `House`, `Private Room`, `Hotel`];

const places = [
  {
    title: `Tiny apartment`,
    price: 70,
    type: placeTypes[0],
    rating: 80,
    isPremium: true,
    imageName: `apartment-03`,
    gps: {lat: 52.3809553943508, lon: 4.939309666406198}
  },
  {
    title: `Spacious loft`,
    price: 160,
    type: placeTypes[0],
    rating: 60,
    isPremium: false,
    imageName: `apartment-02`,
    gps: {lat: 52.3909553943508, lon: 4.929309666406198}
  },
  {
    title: `Rustic mansion`,
    price: 220,
    type: placeTypes[1],
    rating: 100,
    isPremium: true,
    imageName: `apartment-03`,
    gps: {lat: 52.369553943508, lon: 4.85309666406198}
  }
];

const coordinates = places.map((place) => {
  return {lat: place.gps.lat, lon: place.gps.lon};
});

const placesListing = {
  foundPlacesQnt: 54,
  places: [...places],
  handleHover: jest.fn(),
  coordinates
};

export default placesListing;
