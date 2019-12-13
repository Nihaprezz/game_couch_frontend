import React from "react"

class ShowHeader extends React.Component{

    

    render(){
        let { background_image, name } = this.props.movieObj

        return (
            <div>
                This is the ShowHeader

                <h1>{name}</h1>

                <div>
                    <img alt={name} src={background_image}></img>
                </div>

                <div>
                    Genres:
                    {!this.props.movieObj.genres ? <h1>True</h1> : this.props.movieObj.genres.map(genre => {
                        return <h1 key={genre.id}>{genre.name}</h1>
                    })}
                </div>

                <div>
                    ScreenShots:
                    {!this.props.screenShots ? <h1>false</h1> : this.props.screenShots.map(picture => {
                        return (
                        <div key={picture.id}>
                            <img alt={picture.id} src={picture.image}></img>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ShowHeader