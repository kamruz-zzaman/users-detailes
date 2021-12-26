import React from 'react';

const Users = ({ users, handleUser }) => {
    const { id, profile } = users;

    return (
        <div>

            <button onClick={() => handleUser(id)} className='userBg py-2 mt-3 w-100'>{profile.firstName} {profile.lastName}</button>

        </div>
    );
};

export default Users;