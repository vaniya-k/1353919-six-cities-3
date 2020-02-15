import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import placesListing from '../../mocks/places-listing-test.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The first card is hovered on and cardId is passed to handleHover`, () => {
  const mock = jest.fn();

  const main = shallow(
      <PlaceCard place={placesListing.places[0]} cardId={`keyXXX`} handleHover={mock}/>
  );

  main.find(`article`).simulate(`mouseenter`);

  expect(mock).toHaveBeenCalledWith(`keyXXX`);
});


