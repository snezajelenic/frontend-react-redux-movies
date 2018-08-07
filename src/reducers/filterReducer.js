import { SEARCH_TEXT_CHANGED } from "../actions/search.actions";

var initialText = {text: ""}

export default function filter(state = initialText, action = {}) {
    switch(action.type) {
        case SEARCH_TEXT_CHANGED:
            return { ...state, text: action.text };
        default: return state;
    }
}