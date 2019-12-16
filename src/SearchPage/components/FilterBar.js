import React from "react"
import { connect } from "react-redux"
import { fetchingTopGames } from "../../redux/actions"

//FilterBar will allow users to change the genre of the games they are looking for. 
//FilterBar will allow users to look at the best of the year games 
//Popular in 2018 games and popular games in 2017
const genres = ["Action", "Arcade", "Adventure", "Casual", "Family", "Fighting", "Indie", "Platformer", "Puzzle", "Racing", "RPG", "Shooter","Simulation", "Sports", "Strategy"]

class FilterBar extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>Genres:</h1>
                <div className="select">
                    <select>
                        <option value="">Genre</option>
                        {genres.map(genre => {
                            return <option key={genre} value={genre}>{genre}</option>
                        })}
                    </select>
                </div>

                <div>
                    {/* Popular links will go here */}
                    <h1>Popular </h1>
                    <button onClick={() => {this.props.fetchingTopGames("2019")}}
                    className="button is-white">2019 Top Games</button>
                    <button onClick={() => {this.props.fetchingTopGames("2018")}}
                    className="button is-white">2018 Top Games</button>
                    <button onClick={() => {this.props.fetchingTopGames("2017")}}
                    className="button is-white">2017 Top Games</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        fetchingTopGames: (year) => {dispatch(fetchingTopGames(year))}
    }
}

export default connect(null, mapDispatchToProps)(FilterBar)