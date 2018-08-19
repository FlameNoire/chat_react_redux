import constants from 'constants/index'

const messagesReducer = (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case constants.RECEIVE_NEW_MESSAGE:
            return state.concat({
                text: action.text,
                author: action.author,
                time: action.time,
                color: action.color
            })
        default:
            return state
    }
}

export  default messagesReducer