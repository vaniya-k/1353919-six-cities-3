import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';

const reviews = [
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

it(`<ReviewList/> should render two reviews`, () => {

  const tree = renderer
    .create(<ReviewsList reviews={reviews}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
