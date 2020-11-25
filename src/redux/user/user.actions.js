import USER_ACTIONTYPES from './user.actionTypes'

export const setUsers = (users) => ({
    type: USER_ACTIONTYPES.SET_USERS,
    payload: users
})