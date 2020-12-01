import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserSingle from '../../components/userSingle/userSingle.component';

import { fetchUsersAsync } from '../../redux/user/user.actions';
import { selectUserList } from '../../redux/user/user.selectors';


const UsersList = ({ fetchUsersAsync, selectUserList }) => {

    useEffect(() => {
        fetchUsersAsync()

        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-around">
                {
                    selectUserList ?
                        selectUserList.map(user => <UserSingle key={user.id} user={user} />)
                        : null
                }
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectUserList: selectUserList,
})

const mapDispatchToProps = dispatch => ({
    fetchUsersAsync: () => dispatch(fetchUsersAsync())
})



export default connect(mapStateToProps, mapDispatchToProps)(UsersList);