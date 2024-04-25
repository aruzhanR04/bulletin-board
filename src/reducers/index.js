import { combineReducers } from 'redux';
import advertismentsReducer from './advertismentsReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  advertisments: advertismentsReducer,
  filter: filterReducer
});

export default rootReducer;