import getAllOffers from '../../adapter.js';
import getAllOffersWithCompleteData from '../../adapterAllOffersWithCompleteData.js';

const initialState = {
  activeCityId: 0,
  activeCityName: ``,
  places: [],
  activeCardLatLon: {lat: null, lon: null},
  activeSortType: 0,
  allOffers: [],
  allOffersWithCompleteData: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_ALL_OFFERS: `GET_ALL_OFFERS`,
  GET_ALL_OFFERS_WITH_COMPLETE_DATA: `GET_ALL_OFFERS_WITH_COMPLETE_DATA`,
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
  }),
  getAllOffersWithCompleteData: (apiReturn) => ({
    type: ActionType.GET_ALL_OFFERS_WITH_COMPLETE_DATA,
    payload: getAllOffersWithCompleteData(apiReturn)
  })
};

const ApiManager = {
  getAllOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.getAllOffers(response.data));
      });
  },
  getAllOffersWithCompleteData: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.getAllOffersWithCompleteData(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        activeCityId: action.payload,
        activeCityName: state.allOffers[action.payload].city,
        places: state.allOffers[action.payload].places
      });

    case ActionType.GET_ALL_OFFERS:
      return Object.assign({}, state, {
        activeCityId: 0,
        activeCityName: action.payload[0].city,
        places: action.payload[0].places,
        allOffers: action.payload
      });
    
    case ActionType.GET_ALL_OFFERS_WITH_COMPLETE_DATA:
      return Object.assign({}, state, {
        allOffersWithCompleteData: action.payload
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
