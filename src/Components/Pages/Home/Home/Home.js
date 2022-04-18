import React from 'react';
import Services from '../../Home/Services/Services' ;
import Banner from '../Banner/Banner';
import Welcome from '../WelcomePart/Welcome';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Welcome></Welcome>
            <Services></Services>
        </>
    );
};

export default Home;