const processOffersNearby = (apiReturn) => {
  const places = apiReturn;
  const placesNearby = [];

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
    placesNearby.push(buildPlaceCardObj(place));
  });

  return placesNearby;
};

export default processOffersNearby;
