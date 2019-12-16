import { combineReducers } from "redux";

const releasedReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_JUST_RELEASED":
            return action.payload
        case "SEARCH_RESULTS":
                return action.payload
        case "TOP_GAMES_BY_YEAR":
                return action.payload
        case "GAMES_BY_GENRE":
                return action.payload
        default: 
            return state;
    }
}

const userReducer = (state = [], action) => {
    switch(action.type) {
        case "CURRENT_USER":
            return action.payload
        case "SIGN_OUT":
            return action.payload
        default:
            return state;
    }
}

const searchReducer = (state = "", action) => {
    switch(action.type){
        case "CHANGE_SEARCH":
            return action.payload
        default: 
            return state;
    }
}

const likedGamesReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_LIKED_GAMES":
            return action.payload
        default: 
            return state;
    }
}

const rootReducer = combineReducers({
    justReleased: releasedReducer,
    currentUser: userReducer,
    searchText: searchReducer,
    userLikedGames: likedGamesReducer
});

export default rootReducer;