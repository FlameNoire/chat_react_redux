import React, {Component} from 'react'

export default class ChatControl extends Component {
    render() {
        return (
            <div class="chat-message clearfix">
                <textarea placeholder="Type your message" rows="3"></textarea>

                <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                <i class="fa fa-file-image-o"></i>

                <button>Send</button>

            </div>
        )
    }
}