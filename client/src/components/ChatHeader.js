import React, {Component} from 'react'
import {connect} from 'react-redux'

class ChatHeader extends Component {

    render() {
        return (
            <div class="chat-header clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
                     alt="avatar"/>

                <div class="chat-about">
                    {this.props.user.userName}
                    <div class="chat-num-messages">already 1 902 messages</div>
                </div>
                <i class="fa fa-star"/>
            </div>
        )
    }
}
const  mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}
const  mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader)