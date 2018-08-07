import { combineReducers } from 'redux';

import movies from './moviesReducer';
import filter from './filterReducer';
import paging from './pagingReducer';
import activePage from './activePage';
import usersReducer from './usersReducer';


export default combineReducers({
    movies,
    filter,
    paging,
    activePage,
    usersReducer
})