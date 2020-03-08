import offers from '../src/mocks/cities-with-places.js';

const firstActiveCity = 0;

const initialState = {
  activeCityId: firstActiveCity,
  activeCityName: offers[firstActiveCity].city,
  places: offers[firstActiveCity].places,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_PLACES: `GET_PLACES`
};

const ActionCreator = {
  changeCity: (cityId) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityId
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        activeCityId: action.payload,
        activeCityName: offers[action.payload].city,
        places: offers[action.payload].places,
      });

    case ActionType.GET_PLACES:
      return state.places;
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
