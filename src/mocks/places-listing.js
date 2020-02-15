const placeTypes = [`Apartment`, `House`];

const places = [
  {
    title: `Cozy flat`,
    price: 80,
    type: placeTypes[0],
    rating: 80
  },
  {
    title: `Spacious apartment`,
    price: 170,
    type: placeTypes[0],
    rating: 100
  },
  {
    title: `Rustic cabin`,
    price: 140,
    type: placeTypes[1],
    rating: 80
  },
  {
    title: `Authentic fachwerk house`,
    price: 210,
    type: placeTypes[1],
    rating: 100
  }
];

const placesListing = {
  foundPlacesQnt: 432,
  places: [...places]
};

export default placesListing;
