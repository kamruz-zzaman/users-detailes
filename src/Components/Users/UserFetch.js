import React, { useEffect, useState } from 'react';
import Users from './Users';
import './user.css'
import { Outlet } from 'react-router-dom';
import avater from '../../Images/avater.png'

const UserFetch = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <>
            <div className='container'>
                <div className='d-flex main'>
                    <div className=' m-5 divWidth '>
                        <h4 className='usersList py-1'>USERS LIST</h4>
                        {/* <img className='border' src="../../Images/avater.png" alt="" /> */}
                        {
                            users.map(user => (
                                <Users
                                    key={user.id}
                                    users={user}
                                ></Users>
                            ))
                        }
                    </div>
                    <div className='divWidth m-5 '>
                        <h4 className='usersList py-1'>USER DETAILS</h4>
                        <img width="15%" className='mt-3' src={avater} alt="" /><br />
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserFetch;