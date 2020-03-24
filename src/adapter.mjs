import data from '../src/hotels.mjs'

const allPlacesFromServer = data;

const filterCityPlaces = (places, city) => {
    const filteredPlaces = [];

    const filterPlaces = (places) => places.map((place) => {
        if (place.city.name === city) {
            const placeCardInfo = {
                title: place.title,
                price: place.price,
                type: place.type,
                rating: place.rating * 20,
                isPremium: place.is_premium,
                imageName: `apartment-03`,
                previewUrl: place.preview_image,
                gps: {lat: place.location.latitude, lon: place.location.longitude}
            };
            filteredPlaces.push(placeCardInfo)
        };
    });

    filterPlaces(places);

    return filteredPlaces;
};

console.log(filterCityPlaces(allPlacesFromServer, `Paris`));

export default filterCityPlaces;
