export const SEARCH_TEXT_CHANGED = 'SEARCH_TEXT_CHANGED';
export const FETCH_COUNT = 'FETCH_COUNT';


export const updateSearchText = (text) => dispatch => {
  return dispatch({
    type: SEARCH_TEXT_CHANGED,
    text: text
  })
}










