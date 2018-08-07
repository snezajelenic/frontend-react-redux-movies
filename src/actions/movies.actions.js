import { apiUrl } from "../helpers/constants";

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const NEW_MOVIE = 'NEW_MOVIE';
export const MOVIE_DELETED = "MOVIE_DELETED";
export const MOVIE_EDITED = "MOVIE_EDITED";


export function fetchMovies(text, pageSize,pageNumber) {  
    return dispatch => {
      fetch(`${apiUrl}/${pageSize}/${pageNumber}/${text}`, {
        method: "GET",
      }).then(function (response) {
        return response.json()
      }).then(json => dispatch({
        type: FETCH_MOVIES,
        movies: json.data,
      }))
        .catch(error => console.log(error));  
        console.log(`${apiUrl}/movies/${pageSize}/${pageNumber}/${text}`);

    }
  }
  
  
  export function createMovie(movie) {
    return dispatch => {
      fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin' : '*',        },
        body: JSON.stringify(movie)
      })
        .then(result => result.json())
        .then(post =>
          dispatch({
            type: NEW_MOVIE,
            movie: post
          })
        );
        console.log("post")
    }
  }
  
  
  export function editMovie(edit_movie) {
    return dispatch => {
      fetch(`${apiUrl}/${edit_movie.id}`, {
        method: "PUT",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(edit_movie)
      })
        .then(result => result.json())
        .then(data =>
          dispatch({
            type: MOVIE_EDITED,
            edit_movie: edit_movie
          })
        );
    }
  }
  
  
  export function deleteMovie(id) {
    return dispatch => {
    fetch(`${apiUrl}/movies/${id}`, {
      method: "DELETE"
    }).then(data =>
      dispatch({
        type: MOVIE_DELETED,
        id: id
      })
    );
  }
  }