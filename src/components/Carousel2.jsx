import React, { useState } from 'react';
import BW from '../assets/me/BW.png'
import BW1 from '../assets/me/BW1.png'
import BW2 from '../assets/me/BW2.png'
import BW3 from '../assets/me/BW3.png'
import BW4 from '../assets/me/BW4.png'
import BW5 from '../assets/me/BW5.png'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "./Carousel.css";

export const Carousel2 = ({ itemData }) => {
    const [slide, setSlide] = useState(0);

    const handlePrevClick = () => {
        setSlide((prevSlide) => (prevSlide === 0 ? itemData2.length - 1 : prevSlide - 1));
    };

    const handleNextClick = () => {
        setSlide((prevSlide) => (prevSlide === itemData2.length - 1 ? 0 : prevSlide + 1));
    };

    const handleIndicatorClick = (idx) => {
        setSlide(idx);
    };

    return (
        <div className="carouselbox">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevClick} />
            {itemData2.map((item2, idx) => (
                <img
                    srcSet={`${item2.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item2.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                />
            ))}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNextClick} />
            <span className="indicators">
                {itemData2.map((item, idx) => (
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

const itemData2 = [
    {
        img: BW,
        alt: "Rick resting on a rock",
        page: "1"
    },
    {
        img: BW1,
        alt: "Sunset in Canada",
        page: "2"
    },
    {
        img: BW2,
        alt: "indian pictographs",
        page: "3"
    },
    {
        img: BW3,
        alt: "sunrise in Canada",
        page: "4"
    },
    {
        img: BW4,
        alt: "Rick paddling",
        page: "5"
    },
    {
        img: BW5,
        alt: "Campsite at boundary waters",
        page: "6"
    },
];

export default Carousel2;