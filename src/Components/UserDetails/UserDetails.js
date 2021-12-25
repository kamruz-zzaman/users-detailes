import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UserDetails = () => {
    const { user } = useParams();
    const [userr, setUserr] = useState([])
    useEffect(() => {
        fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${user}`)
            .then(res => res.json())
            .then(data => setUserr(data))
    }, [])
    const { Bio, avatar, jobTitle, profile } = userr;
    return (
        <>
            <h3>{ }</h3>
            <textarea defaultValue={Bio} name="" id="" cols="30" rows="3"></textarea><br />
            <div className='mt-4 '>
                <span className='inputTitle'>Full name: </span><br />
                <input className='w-75' type="text" name="" id="" />
            </div>
            <div className='mt-2'>
                <span className='inputTitle2'>Job Title: </span><br />
                <input defaultValue={jobTitle} className='w-75' type="text" name="" id="" />
            </div>
            <div className='mt-2'>
                <span className='inputTitle3'>Email: </span><br />
                <input className='w-75' type="text" name="" id="" />
            </div>
        </>
    );
};

export default UserDetails;