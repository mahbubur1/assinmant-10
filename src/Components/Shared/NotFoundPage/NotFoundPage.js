import React from 'react';
import image from '../../Images/404.gif'

const NotFoundPage = () => {
    return (
        <div className='container'>
            <img className='mt-2 img-fluid' src={image} alt="" />
        </div>
    );
};

export default NotFoundPage;