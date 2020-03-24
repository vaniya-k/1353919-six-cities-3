import offers from '../src/mocks/cities-with-places.js';
import getAllOffers from '../src/adapter.js';

const firstActiveCity = 0;

const initialState = {
  activeCityId: firstActiveCity,
  activeCityName: offers[firstActiveCity].city,
  places: offers[firstActiveCity].places,
  activeCardLatLon: {lat: null, lon: null},
  activeSortType: 0,
  allOffers: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_ALL_OFFERS: `GET_ALL_OFFERS`,
  SET_ACTIVE_CARD_LAT_LON: `SET_ACTIVE_CARD_LAT_LON`,
  CHANGE_SORTING: `CHANGE_SORTING`
};

const ActionCreator = {
  changeCity: (cityId) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityId
  }),
  setActiveCardLatLon: (activeCardLatLon) => ({
    type: ActionType.SET_ACTIVE_CARD_LAT_LON,
    payload: activeCardLatLon
  }),
  changeSorting: (selectedSortType) => ({
    type: ActionType.CHANGE_SORTING,
    payload: selectedSortType
  }),
  getAllOffers: (apiReturn) => ({
    type: ActionType.GET_ALL_OFFERS,
    payload: getAllOffers(apiReturn)
  })
};

const ApiManager = {
  getAllOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.getAllOffers(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        activeCityId: action.payload,
        activeCityName: offers[action.payload].city,
        places: offers[action.payload].places
      });

    case ActionType.GET_ALL_OFFERS:
      return Object.assign({}, state, {
        allOffers: action.payload
      });

    case ActionType.SET_ACTIVE_CARD_LAT_LON:
      return Object.assign({}, state, {
        activeCardLatLon: {lat: action.payload.lat, lon: action.payload.lon}
      });

    case ActionType.CHANGE_SORTING:
      return Object.assign({}, state, {
        activeSortType: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, ApiManager};
