import COMMENT_ACTIONTYPES from './comment.actionTypes'

const INITIAL_STATE = {
    comments: []
}

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COMMENT_ACTIONTYPES.SET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return { ...state }
    }
}

export default commentReducer