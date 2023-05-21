import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <section className='container mx-auto my-10'>
            <AutoplaySlider play={true} cancelOnInteraction={false}  interval={2000}>
                <div data-src="https://cdn.pixabay.com/photo/2021/02/13/05/32/model-car-6010382_960_720.jpg" />
                <div data-src="https://cdn.pixabay.com/photo/2016/10/20/06/00/fiat-1754723_960_720.jpg" />
                <div data-src="https://cdn.pixabay.com/photo/2020/04/24/11/45/model-car-5086548_960_720.jpg" />
            </AutoplaySlider>
        </section>
    );
};

export default Slider;