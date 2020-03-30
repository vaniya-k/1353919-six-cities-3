const processOffers = (apiReturn) => {
  const places = apiReturn;
  const cities = [];
  const citiesLatLon = [];
  const allOffers = [];

  const composeCitiesList = (allPlaces) => allPlaces.map((place) => {
    if (!cities.includes(place.city.name)) {
      cities.push(place.city.name);
      citiesLatLon.push({lat: place.city.location.latitude, lon: place.city.location.longitude});
    }
  });

  composeCitiesList(places);

  const addCitiesToAllOffers = (allCities) => allCities.map((city) => {
    const cityObj = {
      city,
      cityLatLon: citiesLatLon[0],
      places: []
    };

    citiesLatLon.splice(0, 1);

    allOffers.push(cityObj);
  });

  addCitiesToAllOffers(cities);

  const buildPlaceCardObj = (place) => {
    return {
      id: place.id,
      title: place.title,
      price: place.price,
      type: place.type,
      rating: place.rating * 20,
      isPremium: place.is_premium,
      isFavorite: place.is_favorite,
      previewUrl: place.preview_image,
      gps: {lat: place.location.latitude, lon: place.location.longitude}
    };
  };

  places.map((place) => {
    switch (place.city.name) {
      case allOffers[0].city:
        allOffers[0].places.push(buildPlaceCardObj(place));
        break;

      case allOffers[1].city:
        allOffers[1].places.push(buildPlaceCardObj(place));
        break;

      case allOffers[2].city:
        allOffers[2].places.push(buildPlaceCardObj(place));
        break;

      case allOffers[3].city:
        allOffers[3].places.push(buildPlaceCardObj(place));
        break;

      case allOffers[4].city:
        allOffers[4].places.push(buildPlaceCardObj(place));
        break;

      case allOffers[5].city:
        allOffers[5].places.push(buildPlaceCardObj(place));
        break;

      default:
        break;
    }
  });

  return allOffers;
};

export default processOffers;
