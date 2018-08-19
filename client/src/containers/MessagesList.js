import React, {Component} from 'react'
import { connect } from 'react-redux'
import ChatHeader from 'components/ChatHeader'
import MessageItem from 'components/MessageItem';
import ChatControl from 'components/ChatControl';

class MessagesList extends Component {
    constructor() {
        super()

        this.chatWrap = null
        this.ul = null
    }
    componentDidUpdate() {
        this.chatWrap.scrollTop = this.ul.scrollHeight
    }

    render() {
        return (
            <div class="chat">

                <ChatHeader />

                <div class="chat-history" ref={chatWrap => this.chatWrap = chatWrap}>
                    <ul ref={ul => this.ul = ul}>
                        {this.props.messages.map(m => {
                            return (
                                <MessageItem key={m.time} {...m} />
                            )
                        })}
                    </ul>

                    <div>
                        <i class="fa fa-circle online"></i>
                        <i class="fa fa-circle online" style={{'color': '#AED2A6'}}></i>
                        <i class="fa fa-circle online" style={{'color': '#DAE9DA'}}></i>
                    </div>

                </div>

                <ChatControl />

            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return {
        messages: state.messagesReducer
    }
}
const  mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList)