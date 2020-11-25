import React from 'react';

const PostSingle = ({ body, title, index }) => {
    return (
        <section className="border-bottom mb-2">
            {/* {id} */}
            {index + 1}
            <h2>{title}</h2>
            <p>{body}</p>
        </section>
    );
};

export default PostSingle;