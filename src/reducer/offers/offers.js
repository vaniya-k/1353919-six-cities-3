import processOffers from '../../adapter/processOffers.js';
import processOffersNearby from '../../adapter/processOffersNearby.js';
import processOffersWithCompleteData from '../../adapter/processOffersWithCompleteData.js';
import history from '../../history.js';

const initialState = {
  activeCityId: 0,
  activeCityName: ``,
  activePlacePageId: null,
  places: [],
  placesNearby: [],
  activeCardLatLon: {lat: null, lon: null},
  activeSortType: 0,
  allOffers: [],
  allOffersWithCompleteData: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_ALL_OFFERS: `GET_ALL_OFFERS`,
  GET_ALL_OFFERS_WITH_COMPLETE_DATA: `GET_ALL_OFFERS_WITH_COMPLETE_DATA`,
  GET_OFFERS_NEARBY: `GET_OFFERS_NEARBY`,
  SET_ACTIVE_CARD_LAT_LON: `SET_ACTIVE_CARD_LAT_LON`,
  SET_ACTIVE_PLACE_PAGE_ID: `SET_ACTIVE_PLACE_PAGE_ID`,
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
  setActivePlacePageId: (activePlacePageId) => ({
    type: ActionType.SET_ACTIVE_PLACE_PAGE_ID,
    payload: activePlacePageId
  }),
  changeSorting: (selectedSortType) => ({
    type: ActionType.CHANGE_SORTING,
    payload: selectedSortType
  }),
  getAllOffers: (apiReturn) => ({
    type: ActionType.GET_ALL_OFFERS,
    payload: processOffers(apiReturn)
  }),
  getAllOffersWithCompleteData: (apiReturn) => ({
    type: ActionType.GET_ALL_OFFERS_WITH_COMPLETE_DATA,
    payload: processOffersWithCompleteData(apiReturn)
  }),
  getOffersNearby: (apiReturn) => ({
    type: ActionType.GET_OFFERS_NEARBY,
    payload: processOffersNearby(apiReturn)
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
  },
  getOffersNearby: () => (dispatch, getState, api) => {
    return api.get(`/hotels/${Number(history.location.pathname.slice(7))}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.getOffersNearby(response.data));
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

    case ActionType.GET_OFFERS_NEARBY:
      return Object.assign({}, state, {
        placesNearby: action.payload
      });

    case ActionType.SET_ACTIVE_CARD_LAT_LON:
      return Object.assign({}, state, {
        activeCardLatLon: {lat: action.payload.lat, lon: action.payload.lon}
      });

    case ActionType.SET_ACTIVE_PLACE_PAGE_ID:
      return Object.assign({}, state, {
        activePlacePageId: action.payload
      });

    case ActionType.CHANGE_SORTING:
      return Object.assign({}, state, {
        activeSortType: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, ApiManager};
