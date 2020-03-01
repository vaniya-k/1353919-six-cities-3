import {extend} from "./utils.js";

const initialState = {
  activeCity: `Amsterdam`,
  places: [
    {
      title: `Cozy flat`,
      price: 80,
      type: placeTypes[0],
      rating: 80,
      isPremium: true,
      imageName: `apartment-03`,
      gps: {lat: 52.3909553943508, lon: 4.85309666406198}
    },
    {
      title: `Spacious apartment`,
      price: 170,
      type: placeTypes[0],
      rating: 100,
      isPremium: false,
      imageName: `apartment-02`,
      gps: {lat: 52.369553943508, lon: 4.85309666406198}
    },
    {
      title: `Rustic cabin`,
      price: 140,
      type: placeTypes[1],
      rating: 80,
      isPremium: false,
      imageName: `apartment-01`,
      gps: {lat: 52.3909553943508, lon: 4.929309666406198}
    },
    {
      title: `Authentic fachwerk house`,
      price: 210,
      type: placeTypes[3],
      rating: 100,
      isPremium: true,
      imageName: `apartment-03`,
      gps: {lat: 52.3809553943508, lon: 4.939309666406198}
    }
  ],
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