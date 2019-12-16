import React from "react";

class UserPostContainer extends React.Component {

    render(){
        return (
            <div className="user-avatar-post-container">
                This is the UserPostContainer, will contain avatar and create post form
                <div className="feed-avatar-container">
                    {/* Profile Avatar will go here  */}
                    <img></img> 
                </div>

                
            </div>
        )
    }
}

export default UserPostContainer