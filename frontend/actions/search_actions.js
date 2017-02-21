import * as APIUtil from '../util/search_api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
})

export const fetchSearchResults = (query) => dispatch => {
  return APIUtil.fetchSearchResults(query)
    .then((searchResults) => {
      dispatch(receiveSearchResults(searchResults));
    });
}
