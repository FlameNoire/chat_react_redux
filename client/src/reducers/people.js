import constants from 'constants/index'

const peopleReducer = (state = [], action) => {
    switch(action.type) {
        case constants.CONNECTION:
            return state.concat(action.clientsList)
        case constants.CONNECTED_NEW_USER:
            return state.concat({
                id: action.userID,
                userName: action.userName
            })
        case constants.DISCONNECTED_USER:
            return state.filter(u => {
                return u.id !==  action.userID
            })
        default:
            return state
    }
}

export default peopleReducer