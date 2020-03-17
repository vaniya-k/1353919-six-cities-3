import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import placesListing from '../../mocks/places-listing-test.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The first card is hovered on and cardId is passed to handleHover, then its' title is clicked on`, () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  const main = mount(
      <PlaceCard place={placesListing.places[0]} placeLatLon={{lat: placesListing.places[0].gps.lat, lon: placesListing.places[0].gps.lon}} cardId={`keyXXX`} handleHover={mock1} onPlaceCardClick={mock2} articleLocationClass={`cities`}/>
  );

  main.find(`article`).simulate(`mouseenter`);

  expect(mock1).toHaveBeenCalledWith({lat: placesListing.places[0].gps.lat, lon: placesListing.places[0].gps.lon});

  main.find(`.place-card__name a`).simulate(`click`);

  expect(mock2.mock.calls.length).toBe(1);
});


