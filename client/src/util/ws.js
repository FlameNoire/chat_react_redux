import { firstConnection, connectedNewUser, disconnectedUser, receiveNewMessage } from 'actions/index'
import store from 'store/index'

export default ((wsUrl) => {
    let ws;
    const { dispatch } = store

    ws = new WebSocket(wsUrl);

    ws.onmessage = (message) => {
        const messageObj = JSON.parse(message.data)

        console.log('ws message', messageObj)

        switch (messageObj.type) {
            case 'send_clients':
                console.log(messageObj.clientsList)
                dispatch(firstConnection(messageObj.clientsList, messageObj.userName))
                break
            case 'connected_new_user':
                // const { userID, userName } = messageObj
                dispatch(connectedNewUser(messageObj))
                break
            case 'disconnected_user':
                dispatch(disconnectedUser(messageObj.userID))
                break
            case 'message':
                dispatch(receiveNewMessage(messageObj.data))
                break
        }
    }

    let countReconnect = 0
    const emit = (message) => {
        if (countReconnect > 5) return

        if (ws.readyState === ws.CONNECTING) {
            setTimeout(() => {
                emit(message)
                countReconnect++
            }, 500)
            return
        }

        ws.send(message)
        countReconnect = 0
    }


    return { emit }

})('ws://localhost:3000');