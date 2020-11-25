import React from 'react';
import { Link } from 'react-router-dom';

import { UserSingleStyled } from './userSingle.styles';

const UserSingle = ({ user }) => {

    const {id, name, username, website } = user
    return (
        <Link to={`/users/${id}`} className="flex-grow-1 d-block mx-2 my-3">
            <UserSingleStyled className="btn btn-outline-primary">
                <span>{name}</span>
                <span className="text-dark">
                    <span className='user-name small font-weight-bold'> username: </span> {username}
                </span>
                <span className="web text-muted small"> {website}</span>
            </UserSingleStyled>
        </Link>
    );
};

export default UserSingle;