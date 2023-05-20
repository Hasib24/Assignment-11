import React from 'react';
import Banner from './Banner';
import Gellary from './Gellary';
import TabOfToy from './TabOfToy';
import Carousel from './Carousel';


const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Gellary></Gellary>
            <TabOfToy></TabOfToy>
            <Carousel></Carousel>
            
        </section>
    );
};

export default Home;