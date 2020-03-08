import React from 'react';
import renderer from 'react-test-renderer';
import CitiesNavigation from './cities-navigation.jsx';
import citiesNavTestData from '../../mocks/cities-navigation-test.js';

it(`<CitiesNavigation/> should return 6 cities starting with Bucharest`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<CitiesNavigation cities={citiesNavTestData.cities} activeCityId={citiesNavTestData.activeCityId} onCityTabClick={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
