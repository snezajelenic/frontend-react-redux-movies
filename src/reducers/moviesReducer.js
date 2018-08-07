import { FETCH_MOVIES, NEW_MOVIE, MOVIE_DELETED , MOVIE_EDITED} from "../actions/movies.actions";



export default function movies(state = [], action = {}) {
    switch(action.type) {
        case FETCH_MOVIES:
            return action.movies

        case NEW_MOVIE:
            return [
                ...state,
                action.movie
            ];

        case MOVIE_DELETED: 
        return state.filter((data, i) => i !== action.id);


        case MOVIE_EDITED: 
            const updatedItems = state.map(item => {
                if(item.id === action.edit_movie.id){
                return action.edit_movie 
                }
                return item
            })
            return updatedItems

        default: return state;
    }
}