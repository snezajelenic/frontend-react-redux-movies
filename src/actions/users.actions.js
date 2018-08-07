import { apiUrl } from "../helpers/constants";

export const FETCH_USERS = 'FETCH_USERS';


export function fetchUsers() {  
    return dispatch => {
      fetch(`${apiUrl}/users`, {
        method: "GET",
      }).then(result => result.json())
      .then(data => dispatch({
        type: FETCH_USERS,
        users: data,
      }))
        .catch(error => console.log(error));  
    }
  }

