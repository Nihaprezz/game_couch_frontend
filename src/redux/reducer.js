import { combineReducers } from "redux";

const releasedReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_JUST_RELEASED":
            return action.payload
        default: 
            return state;
    }
}

const rootReducer = combineReducers({
    justReleased: releasedReducer
});

export default rootReducer;