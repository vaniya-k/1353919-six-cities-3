import {reducer, ActionCreator, ActionType} from "./user.js";


it(`The user reducer without additional parameters should return the initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: `NO_AUTH`,
  });
});

it(`The user reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: `NO_AUTH`,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: `AUTH`,
  })).toEqual({
    authorizationStatus: `AUTH`,
  });

  expect(reducer({
    authorizationStatus: `AUTH`,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: `NO_AUTH`,
  })).toEqual({
    authorizationStatus: `NO_AUTH`,
  });

  expect(reducer({
    authorizationStatus: `AUTH`,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: `AUTH`,
  })).toEqual({
    authorizationStatus: `AUTH`,
  });

  expect(reducer({
    authorizationStatus: `NO_AUTH`,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: `NO_AUTH`,
  })).toEqual({
    authorizationStatus: `NO_AUTH`,
  });
});

it(`Action Creator for REQUIRE_AUTHORIZATION returns correct action`, () => {
  expect(ActionCreator.requireAuthorization(`NO_AUTH`)).toEqual({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: `NO_AUTH`,
  });

  expect(ActionCreator.requireAuthorization(`AUTH`)).toEqual({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: `AUTH`,
  });
});

