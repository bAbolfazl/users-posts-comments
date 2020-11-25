import React from 'react';
import UsersList from '../../containers/usersList/usersList.container';

const UsersPage = () => {
    return (
        <main>
            <h1 className="mb-4 bg-secondary p-3">Users List</h1>

            <UsersList />
        </main>
    );
};

export default UsersPage;