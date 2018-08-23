import React, {Component} from 'react'

export default class ChatControl extends Component {
    constructor() {
        super()

        this.state = {inputMessage: ''}

        this.onMessageChange = (event) => {
            this.setState({inputMessage: event.target.value})
        }
        this.messageSend = () => {
            ws.emit(this.state.inputMessage)
        }
    }
    render() {
        return (
            <div class="chat-message clearfix">
                <textarea placeholder="Type your message" rows={3} onChange={this.onMessageChange} />

                <i class="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
                <i class="fa fa-file-image-o" />

                <button onClick={this.messageSend}>Send</button>

            </div>
        )
    }
}