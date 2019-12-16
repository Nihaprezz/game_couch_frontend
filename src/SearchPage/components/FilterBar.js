import React from "react"

//FilterBar will allow users to change the genre of the games they are looking for. 
//FilterBar will allow users to look at the best of the year games 
//Popular in 2018 games and top 50 of all time
const genres = ["Action", "Arcade", "Adventure", "Casual", "Family", "Fighting", "Indie", "Platformer", "Puzzle", "Racing", "RPG", "Shooter","Simulation", "Sports", "Strategy"]

class FilterBar extends React.Component {
    render(){
        return (
            <div>
                <div className="select">
                <select>
                    <option value="">Genre</option>
                    {genres.map(genre => {
                        return <option value={genre}>{genre}</option>
                    })}
                </select>
                </div>
            </div>
        )
    }
}

export default FilterBar