import React, { useState } from 'react';
import penguin from '../assets/me/penguin.png'
import TREX from '../assets/me/TREX.png'
import RickBees from '../assets/me/RickBees.png'
import AQme from '../assets/me/AQme.png'
import MGAme from '../assets/me/MGAme.png'
import KC from '../assets/me/KC.png'

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "./Carousel.css";

export const Carousel3 = ({ itemData }) => {
    const [slide, setSlide] = useState(0);

    const handlePrevClick = () => {
        setSlide((prevSlide) => (prevSlide === 0 ? itemData3.length - 1 : prevSlide - 1));
    };

    const handleNextClick = () => {
        setSlide((prevSlide) => (prevSlide === itemData3.length - 1 ? 0 : prevSlide + 1));
    };

    const handleIndicatorClick = (idx) => {
        setSlide(idx);
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevClick} />
            {itemData3.map((item, idx) => (
                <img
                    srcSet={`${item.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                />
            ))}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNextClick} />
            <span className="indicators">
                {itemData3.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleIndicatorClick(idx)}
                        className={`indicator ${slide === idx ? "active" : ""}`}
                    ></button>
                ))}
            </span>
        </div>
    );
};

const itemData3 = [
    {
        img: penguin,
        alt: "Jellyfish Strobulation",
        page: "1"
    },
    {
        img: TREX,
        alt: "Jellyfish Strobulation",
        page: "2"
    },
    {
        img: RickBees,
        alt: "Jellyfish Strobulation",
        page: "3"
    },
    {
        img: AQme,
        alt: "Jellyfish Strobulation",
        page: "4"
    },
    {
        img: MGAme,
        alt: "Jellyfish Strobulation",
        page: "5"
    },
    {
        img: KC,
        alt: "Jellyfish Strobulation",
        page: "6"
    },
];

export default Carousel3;