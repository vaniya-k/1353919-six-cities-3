import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';
import placesFullData from '../../mocks/places-full-data-test.js';

it(`<ReviewList/> should return two reviews -- from Tom and William`, () => {

  const tree = renderer
    .create(<ReviewsList reviewsQnt={placesFullData[0].reviews.length} reviews={placesFullData[0].reviews}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
