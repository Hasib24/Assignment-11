import React from 'react';
import Banner from './Banner';
import Gellary from './Gellary';
import TabOfToy from './TabOfToy';
import Carousel from './Carousel';
import Slider from './Slider';


const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Gellary></Gellary>
            <TabOfToy></TabOfToy>
            <Slider></Slider>
            
        </section>
    );
};

export default Home;