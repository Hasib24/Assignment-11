import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <section className='container mx-auto my-10'>
            <AutoplaySlider play={true} cancelOnInteraction={false}  interval={2000}>
                <div data-src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
                <div data-src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
                <div data-src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
            </AutoplaySlider>
        </section>
    );
};

export default Slider;