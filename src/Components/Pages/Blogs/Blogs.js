import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center container my-5 '>
            <h3 className='text-start text-secondary'>What if Difference between `authorization` and `authentication`?</h3>
           <p className='lh-base'>
           what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. 
           Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.
           </p>
        </div>
    );
};

export default Blogs;