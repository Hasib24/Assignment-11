import React from 'react';
import Banner from './Banner';
import Gellary from './Gellary';
import TabOfToy from './TabOfToy';
import Carousel from './Carousel';
import Slider from './Slider';
import MyMarquee from './MyMarquee';


const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Gellary></Gellary>
            <TabOfToy></TabOfToy>
            <Slider></Slider>
            <MyMarquee></MyMarquee>
            
        </section>
    );
};

export default Home;