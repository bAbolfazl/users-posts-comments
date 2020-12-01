import React, { useState } from 'react';

// import CommentSingle from '../../components/commentSingle/commentSingle.component';
import PaginationReact from 'react-paginate';


const Pagination = ({ comments, postId }) => {

    const [commentPage, setCommentPage] = useState(3)

    const currentComments = comments.filter(comment => String(comment.postId) === String(postId))

    const handle_pageChange = (data) => {
        const selected = data.selected

        setCommentPage(selected)
    }

    return (
        <li className="font-size--n2" >
            {
                comments.length ?
                    currentComments
                        .find((comment, i) => i === commentPage)
                        .body
                    : null
            }

            <PaginationReact containerClassName='pagination' pageCount={currentComments.length} onPageChange={handle_pageChange} />
        </li>
    );
};

export default Pagination;