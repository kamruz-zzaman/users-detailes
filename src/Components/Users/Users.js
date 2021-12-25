import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({ users }) => {
    const { id, avatar, profile } = users;
    return (
        <div>
            <Link to={`/${id}`} className='link'><p className='userBg py-2 mt-3'>{profile.firstName} {profile.lastName}</p></Link>

        </div>
    );
};

export default Users;