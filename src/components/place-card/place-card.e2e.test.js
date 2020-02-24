import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import placesListing from '../../mocks/places-listing-test.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The first card is hovered on and cardId is passed to handleHover, then its' title is clicked on`, () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  const main = shallow(
      <PlaceCard place={placesListing.places[0]} cardId={`keyXXX`} handleHover={mock1} onPlaceCardClick={mock2}/>
  );

  main.find(`article`).simulate(`mouseenter`);

  expect(mock1).toHaveBeenCalledWith(`keyXXX`);

  main.find(`.place-card__name a`).simulate(`click`);

  expect(mock2.mock.calls.length).toBe(1);
});


