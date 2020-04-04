import {combineReducers} from "redux";
import {reducer as offers} from './offers/offers.js';
import {reducer as user} from './user/user.js';

export default combineReducers({
  offers,
  user,
});
