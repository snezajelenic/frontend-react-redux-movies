import { PAGE_ACTIVE_CHANGED } from "../actions/page.actions";


const initialState = { active: false }

export default function paging ( state = initialState, action ) {
    switch(action.type){
        case PAGE_ACTIVE_CHANGED:
            return{
                ...state,
                active: action.active
            }
        default: return state;
    }
}