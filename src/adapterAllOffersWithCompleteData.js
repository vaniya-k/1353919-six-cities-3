const getAllOffersWithCompleteData = (apiReturn) => {
  const places = apiReturn;
  const allOffersWithCompleteData = [];

  const buildPlaceObj = (place) => {
    return {
      id: place.id,
      title: place.title,
      price: place.price,
      type: place.type,
      rating: place.rating * 20,
      isPremium: place.is_premium,
      isFavorite: places.is_favorite,
      gps: {lat: place.location.latitude, lon: place.location.longitude},
      bedroomsQnt: place.bedrooms,
      guestsMaxQnt: place.max_adults,
      images: place.images,
      commodities: place.goods,
      description: place.description,
      host: {
        id: place.host.id,
        name: place.host.name,
        super: place.host.is_pro,
        avaPicUrl: place.host.avatar_url,
      },
    };
  };

  places.map((place) => allOffersWithCompleteData.push(buildPlaceObj(place)));

  return allOffersWithCompleteData;
};

export default getAllOffersWithCompleteData;