import React from 'react';
import renderer from 'react-test-renderer';
import CitiesNavigation from './cities-navigation.jsx';

it(`<CitiesNavigation/> should return 6 cities starting with Metropolis`, () => {
  const mock = jest.fn();

  const tree = renderer
    .create(<CitiesNavigation cities={[`Metropolis`, `Gotham`, `Utopia`, `Dystopia`, `Inferno`, `Limbo`]} activeCityId={0} onCityTabClick={mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
