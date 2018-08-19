import {combineReducers} from 'redux'
import peopleReducer from 'reducers/people'
import messagesReducer from 'reducers/messages'

const chatReducer = combineReducers({
    peopleReducer,
    messagesReducer
})

export default chatReducer