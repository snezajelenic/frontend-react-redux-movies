export const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED';
export const PAGE_NUMBER_CHANGED = 'PAGE_NUMBER_CHANGED';
export const PAGE_ACTIVE_CHANGED = "PAGE_ACTIVE_CHANGED";

export const pageSizeChanged = (pageSize) => dispatch => {
    return dispatch({
      type: PAGE_SIZE_CHANGED,
      pageSize: pageSize
    })
  }

  export const pageNumberChanged = (pageNumber) => dispatch => {
    return dispatch({
      type: PAGE_NUMBER_CHANGED,
      pageNumber: pageNumber
    })
  }

  export const pageActiveChanged = (active) => dispatch => {
    return dispatch({
      type: PAGE_ACTIVE_CHANGED,
      active: active
    })
  }