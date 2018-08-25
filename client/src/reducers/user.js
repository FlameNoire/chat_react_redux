import constants from 'constants/index'

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case constants.CONNECTION:
            return Object.assign({}, {userName: action.userName})
        default:
            return state
    }
}

export default userReducer

