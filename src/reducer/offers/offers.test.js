import {reducer, ActionCreator, ActionType} from "./offers.js";

const apiReview = [
  {
    "id": 1,
    "user": {
      "id": 19,
      "is_pro": true,
      "name": `Bruce`,
      "avatar_url": `https://`
    },
    "rating": 1,
    "comment": `I couldn't stand beeing there -- it's like desert. Why would anyone live in such a place? It's beyond my comprehension`,
    "date": `2020-03-23T07:51:39.415Z`
  }
];

const processedReview = [
  {
    avaPicUrl: `https://`,
    name: `Bruce`,
    text: `I couldn't stand beeing there -- it's like desert. Why would anyone live in such a place? It's beyond my comprehension`,
    rating: 1,
    date: new Date(`2020-03-23T07:51:39.415Z`)
  }
];

const apiOffers = [
  {
    "city": {
      "name": `Gotham`,
      "location": {
        "latitude": 123,
        "longitude": 123,
        "zoom": 13
      }
    },
    "preview_image": `https://`,
    "images": [
      `https://`,
      `https://`
    ],
    "title": `Wayne Estate`,
    "is_favorite": true,
    "is_premium": true,
    "rating": 4.7,
    "type": `apartment`,
    "bedrooms": 13,
    "max_adults": 14,
    "price": 250,
    "goods": [
      `Lions`,
      `THE butler`
    ],
    "host": {
      "id": 33,
      "name": `Bruce`,
      "is_pro": true,
      "avatar_url": `https://`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "latitude": 123,
      "longitude": 123,
      "zoom": 16
    },
    "id": 44
  },
  {
    "city": {
      "name": `Gotham`,
      "location": {
        "latitude": 123,
        "longitude": 123,
        "zoom": 13
      }
    },
    "preview_image": `https://`,
    "images": [
      `https://`,
      `https://`
    ],
    "title": `GPD`,
    "is_favorite": false,
    "is_premium": false,
    "rating": 1.4,
    "type": `house`,
    "bedrooms": 21,
    "max_adults": 67,
    "price": 13,
    "goods": [
      `Wooden banks`,
      `Private cells`,
      `Cold coffee`
    ],
    "host": {
      "id": 55,
      "name": `Gordon`,
      "is_pro": false,
      "avatar_url": `https://`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "latitude": 123,
      "longitude": 123,
      "zoom": 16
    },
    "id": 66
  },
  {
    "city": {
      "name": `Gotham`,
      "location": {
        "latitude": 123,
        "longitude": 123,
        "zoom": 13
      }
    },
    "preview_image": `https://`,
    "images": [
      `https://`,
      `https://`
    ],
    "title": `Batman's Den`,
    "is_favorite": true,
    "is_premium": false,
    "rating": 4.8,
    "type": `room`,
    "bedrooms": 1,
    "max_adults": 1,
    "price": 777,
    "goods": [
      `Gadgets`,
      `Training grounds`
    ],
    "host": {
      "id": 33,
      "name": `Bruce`,
      "is_pro": true,
      "avatar_url": `https://`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "latitude": 123,
      "longitude": 123,
      "zoom": 16
    },
    "id": 77
  }
];

const processedAllOffers = [{
  city: `Gotham`,
  cityLatLon: {lat: 123, lon: 123},
  places: [
    {
      id: 44,
      title: `Wayne Estate`,
      price: 250,
      type: `apartment`,
      rating: 4.7 * 20,
      isPremium: true,
      isFavorite: true,
      previewUrl: `https://`,
      gps: {lat: 123, lon: 123}
    },
    {
      id: 66,
      title: `GPD`,
      price: 13,
      type: `house`,
      rating: 1.4 * 20,
      isPremium: false,
      isFavorite: false,
      previewUrl: `https://`,
      gps: {lat: 123, lon: 123}
    },
    {
      id: 77,
      title: `Batman's Den`,
      price: 777,
      type: `room`,
      rating: 4.8 * 20,
      isPremium: false,
      isFavorite: true,
      previewUrl: `https://`,
      gps: {lat: 123, lon: 123}
    }
  ]
}];

const processedOffersNearby = [
  {
    id: 44,
    title: `Wayne Estate`,
    price: 250,
    type: `apartment`,
    rating: 4.7 * 20,
    isPremium: true,
    isFavorite: true,
    previewUrl: `https://`,
    gps: {lat: 123, lon: 123}
  },
  {
    id: 66,
    title: `GPD`,
    price: 13,
    type: `house`,
    rating: 1.4 * 20,
    isPremium: false,
    isFavorite: false,
    previewUrl: `https://`,
    gps: {lat: 123, lon: 123}
  },
  {
    id: 77,
    title: `Batman's Den`,
    price: 777,
    type: `room`,
    rating: 4.8 * 20,
    isPremium: false,
    isFavorite: true,
    previewUrl: `https://`,
    gps: {lat: 123, lon: 123}
  }
];

const apiAllOffersWithCompleteData = [
  {
    "city": {
      "name": `Gotham`,
      "location": {
        "latitude": 123,
        "longitude": 123,
        "zoom": 13
      }
    },
    "preview_image": `https://`,
    "images": [
      `https://`,
      `https://`
    ],
    "title": `Wayne Estate`,
    "is_favorite": true,
    "is_premium": true,
    "rating": 4.7,
    "type": `apartment`,
    "bedrooms": 13,
    "max_adults": 14,
    "price": 250,
    "goods": [
      `Lions`,
      `THE butler`
    ],
    "host": {
      "id": 33,
      "name": `Bruce`,
      "is_pro": true,
      "avatar_url": `https://`
    },
    "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    "location": {
      "latitude": 123,
      "longitude": 123,
      "zoom": 16
    },
    "id": 44
  }
];

const processedAllOffersWithCompleteData = [
  {
    id: 44,
    title: `Wayne Estate`,
    price: 250,
    type: `apartment`,
    rating: 4.7 * 20,
    isPremium: true,
    isFavorite: true,
    gps: {lat: 123, lon: 123},
    bedroomsQnt: 13,
    guestsMaxQnt: 14,
    images: [
      `https://`,
      `https://`
    ],
    commodities: [
      `Lions`,
      `THE butler`
    ],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    host: {
      id: 33,
      name: `Bruce`,
      super: true,
      avaPicUrl: `https://`
    },
    cityLatLon: {lat: 123, lon: 123},
  }
];


it(`The offers reducer without additional parameters should return the initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeCityId: 0,
    activeCityName: ``,
    activePlacePageId: null,
    places: [],
    placesNearby: [],
    activeCardLatLon: {lat: null, lon: null},
    activeSortType: 0,
    allOffers: [],
    allOffersWithCompleteData: [],
    currentReviews: []
  });
});

it(`The offers reducer should properly create actions`, () => {
  expect(ActionCreator.changeCity(1)).toEqual({
    type: ActionType.CHANGE_CITY,
    payload: 1
  });

  expect(ActionCreator.setActiveCardLatLon(3)).toEqual({
    type: ActionType.SET_ACTIVE_CARD_LAT_LON,
    payload: 3
  });

  expect(ActionCreator.setActivePlacePageId(1)).toEqual({
    type: ActionType.SET_ACTIVE_PLACE_PAGE_ID,
    payload: 1
  });

  expect(ActionCreator.changeSorting(3)).toEqual({
    type: ActionType.CHANGE_SORTING,
    payload: 3
  });

  expect(ActionCreator.getCurrentReviews(apiReview)).toEqual({
    type: ActionType.GET_CURRENT_REVIEWS,
    payload: processedReview
  });

  expect(ActionCreator.getAllOffers(apiOffers)).toEqual({
    type: ActionType.GET_ALL_OFFERS,
    payload: processedAllOffers
  });

  expect(ActionCreator.getOffersNearby(apiOffers)).toEqual({
    type: ActionType.GET_OFFERS_NEARBY,
    payload: processedOffersNearby
  });

  expect(ActionCreator.getAllOffersWithCompleteData(apiAllOffersWithCompleteData)).toEqual({
    type: ActionType.GET_ALL_OFFERS_WITH_COMPLETE_DATA,
    payload: processedAllOffersWithCompleteData
  });

});

it(`The offers reducer should properly dispatch actions`, () => {
  expect(reducer({
    activeCityId: 1,
    activeCityName: ``,
    places: [],
    allOffers: [{city: `Gotham`, places: [`Wayne Estate`]}],
  }, {
    type: ActionType.CHANGE_CITY,
    payload: 0,
  })).toEqual({
    activeCityId: 0,
    activeCityName: `Gotham`,
    places: [`Wayne Estate`],
    allOffers: [{city: `Gotham`, places: [`Wayne Estate`]}],
  });

  expect(reducer({
    activeCityId: 0,
    places: [],
    allOffers: []
  }, {
    type: ActionType.GET_ALL_OFFERS,
    payload: [{city: `Gotham`, places: [`Batman's Den`]}],
  })).toEqual({
    activeCityId: 0,
    places: [`Batman's Den`],
    allOffers: [{city: `Gotham`, places: [`Batman's Den`]}]
  });

  expect(reducer({
    allOffersWithCompleteData: []
  }, {
    type: ActionType.GET_ALL_OFFERS_WITH_COMPLETE_DATA,
    payload: [`Wayne Estate`],
  })).toEqual({
    allOffersWithCompleteData: [`Wayne Estate`]
  });

  expect(reducer({
    placesNearby: []
  }, {
    type: ActionType.GET_OFFERS_NEARBY,
    payload: [`Wayne Estate`, `Batman's Den`, `Circus`],
  })).toEqual({
    placesNearby: [`Wayne Estate`, `Batman's Den`, `Circus`]
  });

  expect(reducer({
    currentReviews: []
  }, {
    type: ActionType.GET_CURRENT_REVIEWS,
    payload: [`Gorgeous!`, `Disaster!`],
  })).toEqual({
    currentReviews: [`Gorgeous!`, `Disaster!`]
  });

  expect(reducer({
    activeCardLatLon: {lat: null, lon: null}
  }, {
    type: ActionType.SET_ACTIVE_CARD_LAT_LON,
    payload: {lat: 123, lon: 123}
  })).toEqual({
    activeCardLatLon: {lat: 123, lon: 123}
  });

  expect(reducer({
    activePlacePageId: null
  }, {
    type: ActionType.SET_ACTIVE_PLACE_PAGE_ID,
    payload: 1
  })).toEqual({
    activePlacePageId: 1
  });

  expect(reducer({
    activeSortType: 0
  }, {
    type: ActionType.CHANGE_SORTING,
    payload: 3
  })).toEqual({
    activeSortType: 3
  });
});
