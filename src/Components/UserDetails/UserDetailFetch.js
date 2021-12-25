import React from 'react';

const UserDetailFetch = ({ userr }) => {
    const { profile, Bio, jobTitle } = userr;
    return (
        <>

            <p className='mt-1 fw-bold'>@{profile.username}</p>
            <textarea defaultValue={Bio} className='px-1' name="" id="" cols="30" rows="3"></textarea><br />
            <div className='mt-4 '>
                <span className='inputTitle'>Full name: </span><br />
                <input value={`${profile.firstName} ${profile.lastName}`} className='w-75 p-1' type="text" name="" id="" />
            </div>
            <div className='mt-2'>
                <span className='inputTitle2'>Job Title: </span><br />
                <input value={jobTitle} className='w-75 p-1' type="text" name="" id="" />
            </div>
            <div className='mt-2'>
                <span className='inputTitle3'>Email: </span><br />
                <input value={profile.email} className='w-75 p-1' type="text" name="" id="" />
            </div>
        </>
    );
};

export default UserDetailFetch;