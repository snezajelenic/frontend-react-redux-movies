import { FETCH_USERS} from "../actions/users.actions";

export default function users(state = [], action = {}) {
    switch(action.type) {
        case FETCH_USERS:
            return action.users
        default: return state;
    }
}