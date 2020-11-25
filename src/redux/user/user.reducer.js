import USER_ACTIONTYPES from './user.actionTypes'

const INITIAL_STATE = {
    users: []
}

const userReucer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ACTIONTYPES.SET_USERS:
            return {
                ...state,
                users: action.payload
            }

        default:
            return { ...state }
    }
}

export default userReucer