import {extend} from "./utils.js";
import offers from '../src/mocks/cities-with-places.js';

const initialState = {
  activeCity: offers[0].city,
  places: offers[0].places,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_PLACES: `GET_PLACES`
};

const ActionCreator = {
  changeCity: (payload) => ({
    type: ActionType.CHANGE_CITY,
    payload: payload,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });

    case ActionType.GET_PLACES:
      return state.places;
  }

  return state;
};

export {reducer, ActionType, ActionCreator};