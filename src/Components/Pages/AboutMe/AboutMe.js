import React from 'react';
import profile from "../../Images/profile.png";

const AboutMe = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <div className="shadow-lg p-5  bg-body rounded text-center">
                <img style={{width:"150px"}} src={profile} alt="" />
                <h3 className='mt-3 mb-5'>MD MAHBUBUR RAHMAN</h3>
                <p className='text-start'><span className=' fw-bolder'>MY DREAM AND GOALS FOR THE NEXT SIX MONT:</span> I am learning programming as a student in programming-hero, my dream for the next six months is to establish myself as a junior web developer and for this I am working like programming-hero and working hard, hopefully in next six months I will be my I will be able to fulfill the dream.Pray for me</p>

            </div>
           
        </div>
    );
};

export default AboutMe;