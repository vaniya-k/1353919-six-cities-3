const placeTypes = [`Apartment`, `House`, `Private Room`, `Hotel`];

const reviews = [
  {
    name: `Tom`,
    avaPicName: `avatar-max`,
    rating: 100,
    text: `The building is green and from 18th century.`,
    date: `2019-04-24`
  },
  {
    name: `William`,
    avaPicName: `avatar-max`,
    rating: 80,
    text: `A place to indulge yourself lots of day dreaming.`,
    date: `2018-11-24`
  },
];


const placesFullData = [
  {
    title: `Sweet room in a gorgeous guesthouse`,
    price: 70,
    type: placeTypes[2],
    isPremium: false,
    rating: 4.4,
    gps: {lat: 51.3809543943508, lon: 3.939309866406198},
    bedroomsQnt: 1,
    guestsMaxQnt: 2,
    images: [`room`, `studio-01`, `apartment-01`],
    commodities: [`Video games`, `Wi-Fi`, `Towels`, `Heating`, `Baby seat`, `Kitchen`, `Fridge`],
    description: [`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful. A place to indulge yourself lots of day dreaming.`],
    host: {name: `Max`, super: true, avaPicName: `avatar-max`},
    reviews
  },
];

export default placesFullData;
