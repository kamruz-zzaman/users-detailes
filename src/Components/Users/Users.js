import React from 'react';

const Users = ({ users }) => {
    const { avatar, profile } = users;
    return (
        <div>
            <p>{profile.firstName} {profile.lastName}</p>
        </div>
    );
};

export default Users;