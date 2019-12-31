import React from "react" 
import GameCard from "../components/GamesProfile"
import { connect } from "react-redux"
import { fetchingAllUserInfo } from "../../redux/actions"
import { Link } from "react-router-dom"
import Modal from "react-modal"
import "../../styles/modal-styling.scss"

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background            : '#151E28'
    }
};


class ProfileLikedGames extends React.Component {
    constructor(){
        super();

        this.state = {
            modalIsOpen: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount(){
        this.props.fetchingAllUserInfo()
    }

    handleOpenModal () {
        this.setState({ modalIsOpen: true });
    }

    handleCloseModal () {
        this.setState({ modalIsOpen: false });
    }

    render(){
        let orderedGames = this.props.likedGames.sort((a,b) => {
            return a.created_at > b.created_at ? -1 : 1
        })

        

        return (
            <div className="profile-games-container"> 
                <h1 onClick={this.handleOpenModal}>Liked Games</h1>
                <div className="my-liked-games">
                {orderedGames.slice(0,6).map(game => {
                    return < GameCard key={game.id} gameObject={game}/>
                })}
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
                            <div className="friend-modal games-modal">
                                <h1 ref={subtitle => this.subtitle = subtitle}>Liked Games</h1>
                                
                                <div className="modal-liked-games">
                                    {this.props.likedGames.map(game => {
                                        return (
                                            <p key={game.id}>
                                                <Link to={`/game/${game.game_api_id}`}>{game.name}</Link>
                                            </p>
                                        )
                                    })}
                                </div>

                                <button className="button is-light" onClick={this.handleCloseModal}>close</button>
                            </div>
                    </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        likedGames: state.userLikedGames
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingAllUserInfo: () => {dispatch(fetchingAllUserInfo())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLikedGames)