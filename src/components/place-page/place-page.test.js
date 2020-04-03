import React from 'react';
import renderer from 'react-test-renderer';
import PlacePage from './place-page.jsx';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {Router} from 'react-router-dom';
import history from '../../history.js';
import axios from "axios";
import thunk from "redux-thunk";

const api = axios.create({
  baseURL: `https://localhost`,
  timeout: 100 * 1
});

const mockReducer = () => {
  const state = {
    offers: {
      activeCardLatLon: {lat: null, lon: null},
      activePlacePageId: 0,
      placesNearby: [
        {
          id: 3,
          title: `Batman's Den`,
          price: 456,
          type: `house`,
          rating: 60,
          isPremium: false,
          isFavorite: true,
          previewUrl: `https://`,
          gps: {lat: 123, lon: 123}
        },
        {
          id: 4,
          title: `Wayne Estate`,
          price: 789,
          type: `apartment`,
          rating: 100,
          isPremium: true,
          isFavorite: true,
          previewUrl: `https://`,
          gps: {lat: 123, lon: 123}
        },
        {
          id: 5,
          title: `Circus`,
          price: 19,
          type: `room`,
          rating: 60,
          isPremium: false,
          isFavorite: false,
          previewUrl: `https://`,
          gps: {lat: 123, lon: 123}
        }
      ],
      currentReviews: [
        {
          avaPicUrl: `https://localhost`,
          date: new Date(`December 17, 2019 03:24:00`),
          name: `Bruce`,
          rating: 1,
          text: `I couldn't stand beeing there -- it's like desert. Why would anyone live in such a place? It's beyond my comprehension`
        },
        {
          avaPicUrl: `https://localhost`,
          date: new Date(`December 25, 2019 13:27:00`),
          name: `Clark`,
          rating: 5,
          text: `Gorgeous ambience, so much light and air! You could even play soccer here!`
        }
      ],
      allOffersWithCompleteData: [{
        cityLatLon: {lat: 123, lon: 123},
        title: `Police Department`,
        price: 333,
        isPremium: false,
        isFavorite: false,
        id: 0,
        type: `house`,
        rating: 70,
        gps: {lat: 123, lon: 123},
        bedroomsQnt: 99,
        guestsMaxQnt: 99,
        images: [`https://localhost`],
        commodities: [`Free food`, `Inner yard`],
        description: `Indulge yourself some time away from your daily routine`,
        host: {
          avaPicUrl: `https://localhost`,
          name: `Gordon`,
          super: true
        }
      }]
    },
    user: {
      authorizationStatus: `AUTH`
    }
  };

  return state;
};

const mockStore = createStore(mockReducer, compose(applyMiddleware(thunk.withExtraArgument(api))));

it(`<PlacePage/> renders Gordon's workplace`, () => {
  history.push(`/place/1`);

  const tree = renderer
    .create(<Provider store={mockStore}><Router history={history}><PlacePage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
