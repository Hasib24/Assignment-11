import React from 'react';
import Banner from './Banner';
import Gellary from './Gellary';
import TabOfToy from './TabOfToy';
import Carousel from './Carousel';
import Slider from './Slider';
import MyMarquee from './MyMarquee';
import useTitle from '../../hooks/useTitle';


const Home = () => {
    useTitle("Home")
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