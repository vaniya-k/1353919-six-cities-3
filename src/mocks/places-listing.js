const placeTypes = [`Apartment`, `House`, `Private Room`, `Hotel`];

const places = [
  {
    title: `Cozy flat`,
    price: 80,
    type: placeTypes[0],
    rating: 80,
    isPremium: true,
    imageName: `apartment-03`
  },
  {
    title: `Spacious apartment`,
    price: 170,
    type: placeTypes[0],
    rating: 100,
    isPremium: false,
    imageName: `apartment-02`
  },
  {
    title: `Rustic cabin`,
    price: 140,
    type: placeTypes[1],
    rating: 80,
    isPremium: false,
    imageName: `apartment-01`
  },
  {
    title: `Authentic fachwerk house`,
    price: 210,
    type: placeTypes[3],
    rating: 100,
    isPremium: true,
    imageName: `apartment-03`
  }
];

const placesListing = {
  foundPlacesQnt: 432,
  places: [...places]
};

export default placesListing;
