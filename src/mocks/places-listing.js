const placeTypes = [`Apartment`, `House`, `Private Room`, `Hotel`];

const places = [
  {
    title: `Cozy flat`,
    price: 80,
    type: placeTypes[0],
    rating: 80,
    isPremium: true,
    imageName: `apartment-03`,
    gps: {lat: 52.3909553943508, lon: 4.85309666406198, isActive: false}
  },
  {
    title: `Spacious apartment`,
    price: 170,
    type: placeTypes[0],
    rating: 100,
    isPremium: false,
    imageName: `apartment-02`,
    gps: {lat: 52.369553943508, lon: 4.85309666406198, isActive: false}
  },
  {
    title: `Rustic cabin`,
    price: 140,
    type: placeTypes[1],
    rating: 80,
    isPremium: false,
    imageName: `apartment-01`,
    gps: {lat: 52.3909553943508, lon: 4.929309666406198, isActive: false}
  },
  {
    title: `Authentic fachwerk house`,
    price: 210,
    type: placeTypes[3],
    rating: 100,
    isPremium: true,
    imageName: `apartment-03`,
    gps: {lat: 52.3809553943508, lon: 4.939309666406198, isActive: false}
  }
];

const placesListing = {
  foundPlacesQnt: 432,
  places: [...places]
};

export default placesListing;
