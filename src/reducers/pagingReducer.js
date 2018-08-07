import { PAGE_SIZE_CHANGED, PAGE_NUMBER_CHANGED } from "../actions/page.actions";


const initialState = { pageSize: 3, pageNumber: 1 }

export default function paging ( state = initialState, action ) {
    switch(action.type){
        case PAGE_SIZE_CHANGED:
            return{
                ...state,
                pageSize: action.pageSize
            }
        case PAGE_NUMBER_CHANGED:
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        default: return state;
    }
}