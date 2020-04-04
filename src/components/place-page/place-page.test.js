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

const placesNearby = [
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
];

const currentReviews = [
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
];

const currentReviewsTooMany = [
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
    rating: 4,
    text: `Gorgeous ambience, so much light and air! You could even play soccer here!`
  },
  {
    avaPicUrl: `https://localhost`,
    date: new Date(`December 18, 2019 03:24:00`),
    name: `Bruce`,
    rating: 2,
    text: `I couldn't stand beeing there -- it's like beeing in a cave. Why would anyone live in such a place? It's beyond my comprehension`
  },
  {
    avaPicUrl: `https://localhost`,
    date: new Date(`December 25, 2019 13:27:00`),
    name: `Clark`,
    rating: 5,
    text: `Gorgeous ambience, so much light and air! You could even play basketball here!`
  },
  {
    avaPicUrl: `https://localhost`,
    date: new Date(`December 16, 2019 03:24:00`),
    name: `Bruce`,
    rating: 1,
    text: `I couldn't stand beeing there -- it's like floating in space. Why would anyone live in such a place? It's beyond my comprehension`
  },
  {
    avaPicUrl: `https://localhost`,
    date: new Date(`December 15, 2019 13:27:00`),
    name: `Clark`,
    rating: 4,
    text: `Gorgeous ambience, so much light and air! You could even play baseball here!`
  },
  {
    avaPicUrl: `https://localhost`,
    date: new Date(`December 14, 2019 03:24:00`),
    name: `Bruce`,
    rating: 2,
    text: `I couldn't stand beeing there -- it's like hell. Why would anyone live in such a place? It's beyond my comprehension`
  },
  {
    avaPicUrl: `https://localhost`,
    date: new Date(`December 13, 2019 13:27:00`),
    name: `Clark`,
    rating: 5,
    text: `Gorgeous ambience, so much light and air! You could even play volleyball here!`
  },
  {
    avaPicUrl: `https://localhost`,
    date: new Date(`December 12, 2019 03:24:00`),
    name: `Bruce`,
    rating: 1,
    text: `I couldn't stand beeing there -- it's like limbo. Why would anyone live in such a place? It's beyond my comprehension`
  },
  {
    avaPicUrl: `https://localhost`,
    date: new Date(`December 11, 2019 13:27:00`),
    name: `Clark`,
    rating: 4,
    text: `Gorgeous ambience, so much light and air! You could even play football here!`
  },
  {
    avaPicUrl: `https://localhost`,
    date: new Date(`December 10, 2019 13:27:00`),
    name: `Clark`,
    rating: 5,
    text: `Gorgeous ambience, so much light and air! You could even play tennis here!`
  }
];

const allOffersWithCompleteData = [{
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
}];

const mockReducerWithoutReviewsButWithYourReviewForm = () => {
  const state = {
    offers: {
      activeCardLatLon: {lat: null, lon: null},
      activePlacePageId: 0,
      placesNearby,
      currentReviews: [],
      allOffersWithCompleteData
    },
    user: {
      authorizationStatus: `AUTH`
    }
  };

  return state;
};

const mockStoreWithoutReviewsButWithYourReviewForm = createStore(mockReducerWithoutReviewsButWithYourReviewForm, compose(applyMiddleware(thunk.withExtraArgument(api))));

const mockReducerWithReviewsButWithoutYourReviewForm = () => {
  const state = {
    offers: {
      activeCardLatLon: {lat: null, lon: null},
      activePlacePageId: 0,
      placesNearby,
      currentReviews,
      allOffersWithCompleteData
    },
    user: {
      authorizationStatus: `NO_AUTH`
    }
  };

  return state;
};

const mockStoreWithReviewsButWithoutYourReviewForm = createStore(mockReducerWithReviewsButWithoutYourReviewForm, compose(applyMiddleware(thunk.withExtraArgument(api))));

const mockReducerWithTooManyReviewsAndYourReviewForm = () => {
  const state = {
    offers: {
      activeCardLatLon: {lat: null, lon: null},
      activePlacePageId: 0,
      placesNearby,
      currentReviews: currentReviewsTooMany,
      allOffersWithCompleteData
    },
    user: {
      authorizationStatus: `AUTH`
    }
  };

  return state;
};

const mockStoreWithTooManyReviewsAndYourReviewForm = createStore(mockReducerWithTooManyReviewsAndYourReviewForm, compose(applyMiddleware(thunk.withExtraArgument(api))));

const mockReducerWithoutPlacesNearby = () => {
  const state = {
    offers: {
      activeCardLatLon: {lat: null, lon: null},
      activePlacePageId: 0,
      placesNearby: [],
      currentReviews,
      allOffersWithCompleteData
    },
    user: {
      authorizationStatus: `AUTH`
    }
  };

  return state;
};

const mockStoreWithoutPlacesNearby = createStore(mockReducerWithoutPlacesNearby, compose(applyMiddleware(thunk.withExtraArgument(api))));


it(`<PlacePage/> renders Gordon's workplace without reviews, but with the enabled review form`, () => {
  history.push(`/place/1`);

  const tree = renderer
    .create(<Provider store={mockStoreWithoutReviewsButWithYourReviewForm }><Router history={history}><PlacePage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<PlacePage/> renders Gordon's workplace with reviews, but without the review form`, () => {
  history.push(`/place/1`);

  const tree = renderer
    .create(<Provider store={mockStoreWithReviewsButWithoutYourReviewForm}><Router history={history}><PlacePage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<PlacePage/> renders Gordon's workplace with 10+ reviews`, () => {
  history.push(`/place/1`);

  const tree = renderer
    .create(<Provider store={mockStoreWithTooManyReviewsAndYourReviewForm}><Router history={history}><PlacePage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<PlacePage/> renders Gordon's workplace without places nearby`, () => {
  history.push(`/place/1`);

  const tree = renderer
    .create(<Provider store={mockStoreWithoutPlacesNearby}><Router history={history}><PlacePage/></Router></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
