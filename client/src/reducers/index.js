import {combineReducers} from 'redux'
import userReducer from 'reducers/user'
import peopleReducer from 'reducers/people'
import messagesReducer from 'reducers/messages'

const chatReducer = combineReducers({
    userReducer,
    peopleReducer,
    messagesReducer
})

export default chatReducer