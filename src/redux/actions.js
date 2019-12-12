function fetchedJustReleased(games) {
    return {type: "FETCH_JUST_RELEASED", payload: games.results}
  }

function fetchingJustReleased(){
  return (dispatch) => {
      fetch("http://localhost:3001/released")
      .then(resp => resp.json())
      .then( result => {
          dispatch(fetchedJustReleased(result))
      })
  }
}

export { fetchingJustReleased}