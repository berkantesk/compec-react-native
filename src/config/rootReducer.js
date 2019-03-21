import combineReducer from 'redux';

import { homeReducer } from '../reducers/homeReducer';

export const rootState = {
  home: null
};

const rootReducer = combineReducer({
  home: homeReducer
})

export default rootReducer;