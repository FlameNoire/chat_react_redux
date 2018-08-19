import React, {Component} from 'react'

export default class MessageItem extends Component {
    render() {
        const {author, text, time, color} = this.props
        return (
            <li class="clearfix">
                <div class="message-data align-right">
                    <span class="message-data-time">{Date(time)}</span> &nbsp; &nbsp;
                    <span class="message-data-name">{author}</span>
                    <i class="fa fa-circle me"/>

                </div>
                <div style={{ background: color}} class="message other-message float-right">
                    {text}
                </div>
            </li>
        )
    }
}