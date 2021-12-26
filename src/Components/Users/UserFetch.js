import React, { useEffect, useState } from 'react';
import Users from './Users';
import './user.css'
import avater from '../../Images/avater.png'
import UserDetailFetch from '../UserDetails/UserDetailFetch';
import axios from 'axios';

const UserFetch = () => {
    const [users, setUsers] = useState([]);
    const [userr, setUserr] = useState([])

    useEffect(() => {
        axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users").then((res) => {
            setUsers(res.data);
        });
    }, []);

    const handleUser = (id) => {
        axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`).then((res) => {
            setUserr(res.data);
        });
    }
    return (
        <>
            <div className='container'>
                <div className='d-flex main'>
                    <div className=' m-5 divWidth '>
                        <h4 className='usersList py-1'>USERS LIST</h4>
                        {
                            users.map(user => (
                                <Users
                                    key={user.id}
                                    users={user}
                                    handleUser={handleUser}
                                ></Users>
                            ))
                        }
                    </div>
                    <div className='divWidth m-5 '>
                        <h4 className='usersList py-1'>USER DETAILS</h4>
                        <img width="15%" className='mt-3' src={avater} alt="" /><br />
                        {
                            userr.id ? <UserDetailFetch
                                key={userr.id}
                                user={userr}
                            /> : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserFetch;