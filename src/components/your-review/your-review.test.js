import React from 'react';
import renderer from 'react-test-renderer';
import YourReview from './your-review.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";

const mockReducer = () => {
  const state = {
    offers: null,
    user: null
  };

  return state;
};

const mockStore = createStore(mockReducer);

const mock = jest.fn();

it(`<YourReview/> with empty fields`, () => {
  const tree = renderer
    .create(<Provider store={mockStore}><YourReview newPlaceLoaded={false} review={``} raiting={null} onTypeReview={mock} onSetRating={mock} onYourReviewReload={mock} /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
