const PLACE_TYPES = [`Apartment`, `House`, `Private Room`, `Hotel`];

const CITIES = [`Amsterdam`, `Wien`, `Prague`, `Berlin`, `London`, `Brussels`];

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

const offers = [
  {
    city: CITIES[0],
    places
  },
  {
    city: CITIES[1],
    places: places.slice(0, 2)
  },
  {
    city: CITIES[2],
    places: places.slice(1, 3)
  },
  {
    city: CITIES[3],
    places: []
  },
  {
    city: CITIES[4],
    places: []
  },
  {
    city: CITIES[5],
    places: []
  },
];

export default offers;
