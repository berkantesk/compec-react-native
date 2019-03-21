import { HOME_ACTIONS } from '../actions/homeActions';

const initialState = {
  postList: []
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTIONS.FETCH_POSTS: {
      return {
        ...state,
        postList: action.payload.data
      }
    }
    default:
      break;
  }
}