import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListSorting from './places-list-sorting.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";

const mockReducerSortedByPopular = () => {
  const state = {
    offers: {
      activeSortType: 0
    }
  };

  return state;
};

const mockStoreSortedByPopular = createStore(mockReducerSortedByPopular);

const mockReducerSortedByPriceLowToHigh = () => {
  const state = {
    offers: {
      activeSortType: 1
    }
  };

  return state;
};

const mockStoreSortedByPriceLowToHigh = createStore(mockReducerSortedByPriceLowToHigh);

const mockReducerSortedByPriceHighToLow = () => {
  const state = {
    offers: {
      activeSortType: 2
    }
  };

  return state;
};

const mockStoreSortedByPriceHighToLow = createStore(mockReducerSortedByPriceHighToLow);

const mockReducerSortedByTopRated = () => {
  const state = {
    offers: {
      activeSortType: 3
    }
  };

  return state;
};

const mockStoreSortedByTopRated = createStore(mockReducerSortedByTopRated);

it(`<PlacesListSorting/> is sorted with popular first`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreSortedByPopular}><PlacesListSorting/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<PlacesListSorting/> is sorted by price from low to high`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreSortedByPriceLowToHigh}><PlacesListSorting/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<PlacesListSorting/> is sorted by price from high to low`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreSortedByPriceHighToLow}><PlacesListSorting/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<PlacesListSorting/> is sorted with top rated first`, () => {
  const tree = renderer
    .create(<Provider store={mockStoreSortedByTopRated}><PlacesListSorting/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
