import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import placesListing from '../../mocks/places-listing-test.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Hamburg is clicked on`, () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  const main = shallow(
      <Main places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt} onCityTabClick={mock1} onPlaceCardClick={mock2} placesCoordinates={placesListing.coordinates}/>
  );

  main.find(`.tabs__item-hamburg`).simulate(`click`);

  expect(mock1.mock.calls.length).toBe(1);
});
