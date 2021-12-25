import React, { useEffect, useState } from 'react';
import Users from './Users';

const UserFetch = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <>
            <div>
                {
                    users.map(user => (
                        <Users
                            key={user.id}
                            users={user}
                        ></Users>
                    ))
                }
            </div>
        </>
    );
};

export default UserFetch;