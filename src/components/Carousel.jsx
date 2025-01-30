import React, { useState } from 'react';
import jelly from '../assets/me/jelly.gif';
import jelly2 from '../assets/me/jelly2.gif';
import strobulation from '../assets/me/strobulation.gif';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "./Carousel.css";

export const Carousel = ({ itemData }) => {
    const [slide, setSlide] = useState(0);

    const handlePrevClick = () => {
        setSlide((prevSlide) => (prevSlide === 0 ? itemData.length - 1 : prevSlide - 1));
    };

    const handleNextClick = () => {
        setSlide((prevSlide) => (prevSlide === itemData.length - 1 ? 0 : prevSlide + 1));
    };

    const handleIndicatorClick = (idx) => {
        setSlide(idx);
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevClick} />
            {itemData.map((item, idx) => (
                <img
                    srcSet={`${item.img}?w=400&h=250&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=500&h=400fit=crop&auto=format&dpr=2 2x`}
                    alt={item.alt}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                />
            ))}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNextClick} />
            <span className="indicators">
                {itemData.map((item, idx) => (
                    <button
                        key={item.idx}
                        onClick={() => handleIndicatorClick(idx)}
                        className={`indicator ${slide === idx ? "active" : ""}`}
                    ></button>
                ))}
            </span>
        </div>
    );
};

const itemData = [
    {
        img: jelly,
        alt: "Jellyfish Strobulation",
        page: "1"
    },
    {
        img: strobulation,
        alt: "Jellyfish Strobulation",
        page: "2"
    },
    {
        img: jelly2,
        alt: "Jellyfish Strobulation",
        page: "2"
    },
];

export default Carousel;