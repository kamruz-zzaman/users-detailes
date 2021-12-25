import React from 'react';
const UserDetails = () => {
    return (
        <>
            <h3>name</h3>
            <textarea name="" id="" cols="30" rows="3"></textarea><br />
            <div className='mt-4 '>
                <span className='inputTitle'>Full name: </span><br />
                <input className='w-75' type="text" name="" id="" />
            </div>
            <div className='mt-2'>
                <span className='inputTitle2'>Job Title: </span><br />
                <input className='w-75' type="text" name="" id="" />
            </div>
            <div className='mt-2'>
                <span className='inputTitle3'>Email: </span><br />
                <input className='w-75' type="text" name="" id="" />
            </div>
        </>
    );
};

export default UserDetails;