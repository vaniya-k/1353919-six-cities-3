const placeTypes = [`Apartment`, `House`, `Private Room`, `Hotel`];

const placesExpanded = [
  {
    title: `Beautiful & luxurious studio at great location`,
    price: 120,
    type: placeTypes[0],
    isPremium: true,
    rating: 4.7,
    bedroomsQnt: 3,
    guestsMaxQnt: 4,
    images: [`apartment-01`, `apartment-02`, `apartment-03`, `room`, `studio-01`, `apartment-01`],
    commodities: [`Bar`, `Wi-Fi`, `Washing machine`, `Towels`, `Coffee machine`, `Heating`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful. A place to indulge yourself lots of day dreaming.`],
    host: {name: `Angela`, super: true, avaPicName: `avatar-angelina`}
  },
];

export default placesExpanded;