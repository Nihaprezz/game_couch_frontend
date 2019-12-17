import Swal from 'sweetalert2'

let HOST_URL = "http://localhost:3001"

// FETCHING GAME INFO FROM THE BACKEND!! //

function gameSearchResults(games){
    return {type: "SEARCH_RESULTS", payload: games}
}

//inital game fetch 
function fetchedJustReleased(games) {
    return {type: "FETCH_JUST_RELEASED", payload: games.results}
  }

function fetchingJustReleased(){
  return (dispatch) => {
      fetch(`${HOST_URL}/released`)
      .then(resp => resp.json())
      .then( result => {
          dispatch(fetchedJustReleased(result))
      })
  }
}

//fetching top games by year it was passed 
function fetchedTopGames(games){
    return {type: "TOP_GAMES_BY_YEAR", payload: games}
}

function fetchingTopGames(year){
    return (dispatch) => {
        fetch(`${HOST_URL}/top_games/${year}`)
        .then(resp => resp.json())
        .then( data => {
            dispatch(fetchedTopGames(data.results))
        })
    }
}

//fetching games by genre picked 
function fetchedByGenre(games){
    return {type: "GAMES_BY_GENRE", payload: games}
}

function fetchingByGenre(genre){

    return (dispatch) => {
        fetch(`${HOST_URL}/games_by_genre/${genre.toLowerCase()}`)
        .then(resp => resp.json())
        .then(data => {
            dispatch(fetchedByGenre(data.results))
        })
    }
}

// USER SIGN UP, LOGIN AND SIGN OUT ACTIONS !!! //
function signOut(){
    localStorage.removeItem('jwt')
    return {type: "SIGN_OUT", payload: []} 
}

function setCurrentUser(user) {
    return {type: "CURRENT_USER", payload: user}
}

function signUp(userInfo){
    return (dispatch) => {
        fetch(`${HOST_URL}/api/v1/users`, {
           method: "POST", 
           headers: {
               'Content-Type':'application/json', 
               'Accept': 'application/json'
           },
           body: JSON.stringify({
               user: {
                   username: userInfo.username,
                   password: userInfo.password,
                   bio: userInfo.bio,
                   avatar: userInfo.avatar,
                   location: userInfo.location,
                   favorite_genre: userInfo.favorite_genre         
               }
           }) 
        })
        .then( r => r.json())
        .then( data => {
            dispatch(setCurrentUser(data.user))
            localStorage.setItem("jwt", data.jwt)
        })

        
    }
}

//checking user upon mount, get request to api/v1/profile
function checkUser(){
    if (localStorage.getItem('jwt')){
        return (dispatch) => {
            fetch(`${HOST_URL}/api/v1/profile`, {
                headers: {
                    "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then(res => res.json())
            .then(user => {
                dispatch(setCurrentUser(user.user))
            })
        }
    }
}


//logging user in with credintials they enter
function logIn(userInfo){
    return (dispatch) => {
        fetch(`${HOST_URL}/api/v1/login`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            }, 
            body: JSON.stringify({
                user: {
                    username: userInfo.username,
                    password: userInfo.password
                }
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === "Invalid username or password"){
                Swal.fire({
                    title: 'Unable to Login!',
                    text: `${data.message}`,
                    icon: 'error',
                    confirmButtonText: 'Back'
                })
            } else {
                dispatch(setCurrentUser(data.user))
                localStorage.setItem("jwt", data.jwt)  
            }

        })
    }
}

//changing the search text in the redux store
function changeSearch(text){
    return {type: "CHANGE_SEARCH", payload: text}
}

//SETTING USER'S LIKED GAMES
function fetchedLikedGames(games){
    return {type: "GET_LIKED_GAMES", payload: games}
}

//SETTING USER'S FRIENDS
function fetchedFriends(friends){
    return {type: "GET_FRIENDS", payload: friends}
}

//FETCHING THE USER FRIENDS AND POSTS 
function fetchingAllUserInfo() {
    return (dispatch) => {
        fetch(`${HOST_URL}/user/all_info`,{
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch(fetchedLikedGames(data.likedGames))
            dispatch(fetchedFriends(data.friends))
        })
    }
}

//FETCHING THE USERS POST AND THEIR FRIENDS POST
function setAllRelatedPosts(posts) {
    return {type: "GET_RELATED_POSTS", payload: posts}
}




export { fetchingJustReleased, signUp, checkUser, signOut,logIn, changeSearch, gameSearchResults, fetchingTopGames, fetchingByGenre,
    fetchingAllUserInfo, setAllRelatedPosts}