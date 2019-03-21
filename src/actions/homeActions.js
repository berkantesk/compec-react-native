import * as postApi from '../apis/postApi';

export const HOME_ACTIONS = {
  FETCH_POSTS: FETCH_POSTS
}

export function fetchPosts() {
  return {
    type: HOME_ACTIONS.FETCH_POSTS,
    payload: postApi.fetchPosts()
  }
}

