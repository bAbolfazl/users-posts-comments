import USER_ACTIONTYPES from './user.actionTypes'

const INITIAL_STATE = {
    users: [],
    isFetching: false,
    errorMessage: undefined
}

const userReucer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ACTIONTYPES.FETCH_USERS_START:
            return {
                ...state,
                isFetching: true,
            }
        case USER_ACTIONTYPES.FETCH_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.payload
            }

        case USER_ACTIONTYPES.FETCH_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        default:
            return { ...state }
    }
}

export default userReucer