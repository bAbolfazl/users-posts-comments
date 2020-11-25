import React, { useEffect } from 'react';

import { fetchPosts, fetchUsers } from '../../utils/utils';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserSingle from '../../components/userSingle/userSingle.component';

import { setUsers } from '../../redux/user/user.actions';
import { selectUserList } from '../../redux/user/user.selectors';
import { setPosts } from '../../redux/post/post.actions';
import { selectPostList } from '../../redux/post/post.selector';


const UsersList = ({ setUsers, selectUserList, setPosts, selectPostList }) => {

    useEffect(() => {

        fetchUsers(setUsers)
        fetchPosts(setPosts)

        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-around">
                {
                    selectUserList
                        ?
                        selectUserList.map(user => <UserSingle key={user.id} user={user} fetchPosts={fetchPosts} />)
                        :
                        null
                }
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectUserList: selectUserList,
    selectPostList: selectPostList
})

const mapDispatchToProps = dispatch => ({
    setUsers: users => dispatch(setUsers(users)),
    setPosts: posts => dispatch(setPosts(posts))
})



export default connect(mapStateToProps, mapDispatchToProps)(UsersList);