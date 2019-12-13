let HOST_URL = "http://localhost:3001"

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
                dispatch(setCurrentUser(user))
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
            dispatch(setCurrentUser(data.user))
            localStorage.setItem("jwt", data.jwt)
        })
    }
}

export { fetchingJustReleased, signUp, checkUser, signOut,logIn}