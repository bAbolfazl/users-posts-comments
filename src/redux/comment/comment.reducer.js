import COMMENT_ACTIONTYPES from './comment.actionTypes'

const INITIAL_STATE = {
    comments: [],
    isFetching: false,
    errorMessage: undefined
}

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COMMENT_ACTIONTYPES.FETCH_COMMENTS_START:
            return {
                ...state,
                isFetching: true
            }
            case COMMENT_ACTIONTYPES.FETCH_COMMENTS_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    comments: action.payload
                }
                case COMMENT_ACTIONTYPES.FETCH_COMMENTS_FAILURE:
                    return {
                        ...state,
                        isFetching: false,
                        errorMessage: action.payload
                    }
        default:
            return { ...state }
    }
}

export default commentReducer