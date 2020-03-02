import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from './review-item.jsx';
import placesFullData from '../../mocks/places-full-data-test.js';

it(`<Review/> should return a review from Tom`, () => {
  const {name, avaPicName, rating, text, date} = placesFullData[0].reviews[0];

  const tree = renderer
    .create(<ReviewItem name={name} avaPicName={avaPicName} rating={rating} text={text} date={date}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
