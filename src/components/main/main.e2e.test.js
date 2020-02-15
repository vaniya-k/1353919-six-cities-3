import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import placesListing from '../../mocks/places-listing-test.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Hamburg is clicked on`, () => {
  const onCityTabClick = jest.fn();

  const main = shallow(
      <Main places={placesListing.places} foundPlacesQnt={placesListing.foundPlacesQnt} onCityTabClick={onCityTabClick}/>
  );

  main.find(`.tabs__item-hamburg`).simulate(`click`);

  expect(onCityTabClick.mock.calls.length).toBe(1);
});
