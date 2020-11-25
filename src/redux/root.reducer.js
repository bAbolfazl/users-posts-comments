import { combineReducers } from 'redux'

import commentReducer from './comment/comment.reducer'
import postsReducer from './post/post.reducer'
import userReducer from './user/user.reducer'

const rootReducer = {
    user: userReducer,
    post: postsReducer,
    comment: commentReducer,
}

export default combineReducers(rootReducer)