import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetailFetch = () => {
    const { user } = useParams();
    const [userr, setUserr] = useState()
    useEffect(() => {
        fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${user}`)
            .then(res => res.json())
            .then(data => setUserr(data))
    }, [])
    return (
        <div>
            <p>{userr.id}</p>
        </div>
    );
};

export default UserDetailFetch;