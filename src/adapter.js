const getAllOffers = (apiInput) => {
    const places = apiInput;
    const cities = [];
    const allOffers = [];

    const composeCitiesList = (places) => places.map((place) => {
        if (!cities.includes(place.city.name)) {
            cities.push(place.city.name)
        }
    });

    composeCitiesList(places);

    const addCitiesToAllOffers = (cities) => cities.map((city) => {
        const cityObj = {
            city: city,
            places: []
        };

        allOffers.push(cityObj);
    });

    addCitiesToAllOffers(cities);

    const buildPlaceCardObj = (place) => {
        return {
            title: place.title,
            price: place.price,
            type: place.type,
            rating: place.rating * 20,
            isPremium: place.is_premium,
            imageName: `apartment-03`,
            previewUrl: place.preview_image,
            gps: {lat: place.location.latitude, lon: place.location.longitude},
            id: place.id
        }
    };

    places.map((place) => {
        switch (place.city.name) {
            case allOffers[0].city:
                allOffers[0].places.push(buildPlaceCardObj(place))
                break;
            
            case allOffers[1].city:
                allOffers[1].places.push(buildPlaceCardObj(place))
                break;
            
            case allOffers[2].city:
                allOffers[2].places.push(buildPlaceCardObj(place))
                break;

            case allOffers[3].city:
                allOffers[3].places.push(buildPlaceCardObj(place))
                break;
            
            case allOffers[4].city:
                allOffers[4].places.push(buildPlaceCardObj(place))
                break;
            
            case allOffers[5].city:
                allOffers[5].places.push(buildPlaceCardObj(place))
                break;
    
            default:
                break;
        };
    })

    return allOffers;
};

export default getAllOffers;
