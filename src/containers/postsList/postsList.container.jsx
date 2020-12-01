import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// import { fetchComments, fetchPosts } from '../../utils/utils';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// import { compose } from 'redux';

import { selectPostList } from '../../redux/post/post.selector';
import { fetchPostsAsync } from '../../redux/post/post.actions';
import { FetchCommentAsync } from '../../redux/comment/comment.actions';
import { selectCommentList } from '../../redux/comment/comment.selectors';

import PostSingle from '../../components/postSingle/postSingle.component';
import Pagination from '../pagination/pagination.component';



const PostsList = ({ match, selectPostList, selectCommentList, fetchPostsAsync, FetchCommentAsync }) => {


    useEffect(() => {

        // if (!selectPostList.length) {
        // fetchPosts(setPosts)
        // }

        fetchPostsAsync()
        FetchCommentAsync()
        // fetchComments(setComments)

        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div>
            {
                selectPostList ?
                    selectPostList.filter(post => String(post.userId) === String(match.params.id))
                        .map((post, index) => {
                            return <div key={post.id} className="mb-5 pb-5">
                                <PostSingle {...post} index={index} />
                                <ul className='text-muted'>
                                    comments: <Pagination postId={post.id} comments={selectCommentList} />
                                </ul>
                            </div>
                        })
                    : null
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectPostList: selectPostList,
    selectCommentList: selectCommentList,
})

const mapDispatchToProps = dispatch => ({
    fetchPostsAsync: () => dispatch(fetchPostsAsync()),
    FetchCommentAsync: () => dispatch(FetchCommentAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostsList))