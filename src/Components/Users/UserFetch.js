import React, { useEffect, useState } from 'react';
import Users from './Users';
import './user.css'
// import { Outlet } from 'react-router-dom';
import avater from '../../Images/avater.png'
import { useParams } from 'react-router-dom';

const UserFetch = () => {
    const { user } = useParams();
    const [users, setUsers] = useState([]);
    const [userr, setUserr] = useState([])
    useEffect(() => {
        fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleUser = (id) => {
        fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
            .then(res => res.json())
            .then(data => setUserr(data))
    }
    const { Bio, avatar, jobTitle, profile } = userr;
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
                                    handleUser={handleUser}
                                ></Users>
                            ))
                        }
                    </div>
                    <div className='divWidth m-5 '>
                        <h4 className='usersList py-1'>USER DETAILS</h4>
                        <img width="15%" className='mt-3' src={avater} alt="" /><br />
                        {/* <Outlet></Outlet> */}
                        <h3>{ }</h3>
                        <textarea defaultValue={Bio} name="" id="" cols="30" rows="3"></textarea><br />
                        <div className='mt-4 '>
                            <span className='inputTitle'>Full name: </span><br />
                            <input className='w-75 py-1' type="text" name="" id="" />
                        </div>
                        <div className='mt-2'>
                            <span className='inputTitle2'>Job Title: </span><br />
                            <input defaultValue={jobTitle} className='w-75 py-1' type="text" name="" id="" />
                        </div>
                        <div className='mt-2'>
                            <span className='inputTitle3'>Email: </span><br />
                            <input className='w-75 py-1' type="text" name="" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserFetch;