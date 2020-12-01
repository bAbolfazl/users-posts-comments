import USER_ACTIONTYPES from './user.actionTypes'

export const fetchUsersStart = () => ({
    type: USER_ACTIONTYPES.FETCH_USERS_START,
})

export const fetchUsersSuccess = (users) => ({
    type: USER_ACTIONTYPES.FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = (error) => ({
    type: USER_ACTIONTYPES.FETCH_USERS_FAILURE,
    payload: error
})

export const fetchUsersAsync = () => (
    dispatch => {
        dispatch(fetchUsersStart())

        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then(res => dispatch(fetchUsersSuccess(res)))
            .catch(err => dispatch(fetchUsersFailure(err.message)))
    }
)