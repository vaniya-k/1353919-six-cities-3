const placeTypes = [`Apartment`, `House`];

const places = [
  {
    title: `Tiny apartment`,
    price: 70,
    type: placeTypes[0],
    rating: 80
  },
  {
    title: `Spacious loft`,
    price: 160,
    type: placeTypes[0],
    rating: 60
  },
  {
    title: `Rustic mansion`,
    price: 220,
    type: placeTypes[1],
    rating: 100
  }
];

const placesListing = {
  foundPlacesQnt: 54,
  places: [...places],
  handleHover: jest.fn()
};

export default placesListing;
