import constants from 'constants/index'

export const firstConnection = (clientsList, userName) => {
    return {
        type: constants.CONNECTION,
        clientsList, userName
    }
}
export const connectedNewUser = ({ userID, userName }) => {
    return {
        type: constants.CONNECTED_NEW_USER,
        userID,
        userName
    }
}

export const disconnectedUser = (userID) => {
    return {
        type: constants.DISCONNECTED_USER,
        userID
    }
}

export const receiveNewMessage = ({ author, text, time, color }) => {
    return {
        type: constants.RECEIVE_NEW_MESSAGE,
        author, text, time, color
    }
}
