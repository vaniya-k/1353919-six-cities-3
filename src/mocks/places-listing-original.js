const PLACE_TYPES = [`Apartment`, `House`, `Private Room`, `Hotel`];

const places = [
  {
    title: `Cozy flat`,
    price: 80,
    type: PLACE_TYPES[0],
    rating: 80,
    isPremium: true,
    imageName: `apartment-03`,
    gps: {lat: 52.3909553943508, lon: 4.85309666406198}
  },
  {
    title: `Spacious apartment`,
    price: 170,
    type: PLACE_TYPES[0],
    rating: 80,
    isPremium: false,
    imageName: `apartment-02`,
    gps: {lat: 52.369553943508, lon: 4.85309666406198}
  },
  {
    title: `Rustic cabin`,
    price: 140,
    type: PLACE_TYPES[1],
    rating: 100,
    isPremium: false,
    imageName: `apartment-01`,
    gps: {lat: 52.3909553943508, lon: 4.929309666406198}
  },
  {
    title: `Authentic fachwerk house`,
    price: 210,
    type: PLACE_TYPES[3],
    rating: 100,
    isPremium: true,
    imageName: `apartment-03`,
    gps: {lat: 52.3809553943508, lon: 4.939309666406198}
  }
];

const reviews = [
  {
    name: `Xavier`,
    avaPicName: `avatar-max`,
    rating: 100,
    text: `A nice cozy place that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`
  },
  {
    name: `Robert`,
    avaPicName: `avatar-max`,
    rating: 80,
    text: `It's strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful. A place to indulge yourself lots of day dreaming.`,
    date: `2018-11-24`
  },
];

const placesListing = {
  foundPlacesQnt: 432,
  places: [...places],
  reviews
};

export default placesListing;
