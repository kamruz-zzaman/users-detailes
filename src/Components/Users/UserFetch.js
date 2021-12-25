import React, { useEffect, useState } from 'react';
import Users from './Users';
import './user.css'
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
            <div className='fds d-flex'>
                <div className=' m-5 divWidth '>
                    <h4 className='usersList'>USERS LIST</h4>
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
                    <h4 className='usersList'>USER DETAILS</h4>
                    <img width="15%" className='mt-3' src={avater} alt="" /><br />
                    <h3>name</h3>
                    <textarea name="" id="" cols="30" rows="3"></textarea><br />
                    <div className='mt-4 '>
                        <span className='inputTitle'>Full name: </span><br />
                        <input className='w-50' type="text" name="" id="" />
                    </div>
                    <div className='mt-2'>
                        <span className='inputTitle2'>Job Title: </span><br />
                        <input className='w-50' type="text" name="" id="" />
                    </div>
                    <div className='mt-2'>
                        <span className='inputTitle3'>Email: </span><br />
                        <input className='w-50' type="text" name="" id="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserFetch;