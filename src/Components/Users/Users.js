import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({ users }) => {
    const { avatar, profile } = users;
    return (
        <div>
            <Link to='' className='link'><p className='bg-danger'><img src="" alt="" />{profile.firstName} {profile.lastName}</p></Link>
        </div>
    );
};

export default Users;