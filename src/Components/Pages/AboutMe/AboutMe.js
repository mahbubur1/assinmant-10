import React from 'react';
import profile from "../../Images/profile.png";

const AboutMe = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <div className="shadow-lg p-5  bg-body rounded text-center">
                <img style={{width:"150px"}} src={profile} alt="" />
                <h3 className='my-3'>MD MAHBUBUR RAHMAN</h3>

            </div>
           
        </div>
    );
};

export default AboutMe;