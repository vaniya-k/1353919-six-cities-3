const processOffers = (apiReturn) => {
  const places = apiReturn;
  const cities = [];
  const citiesLatLon = [];
  const allOffers = [];

  const composeCitiesList = (allPlaces) => allPlaces.map((place) => {
    if (cities.length !== 6 && !cities.includes(place.city.name)) {
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
    allOffers[cities.indexOf(place.city.name)].places.push(buildPlaceCardObj(place));
  });

  return allOffers;
};

export default processOffers;
