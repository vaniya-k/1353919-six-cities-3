import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesList from '../places-list/places-list.jsx';
import placesListing from '../../mocks/places-listing-test.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The first card is hovered on`, () => {
  const main = mount(
      <PlacesList places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt}/>
  );

  main.find(`article`).at(0).simulate(`mouseenter`);

  expect(main.state(`activeCardId`)).toBe(`key0`);

  main.find(`article`).at(0).simulate(`mouseleave`);

  expect(main.state(`activeCardId`)).toBe(null);
});
