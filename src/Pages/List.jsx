import React from 'react';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import booksearch from '../assets/projects/booksearchIcon.png'
import carpalapp from '../assets/projects/CarPalIcon.png'
import gastroBook from '../assets/projects/gastroIcon.png'
import getitdone from '../assets/projects/kanban.png'
import notfadeaway from '../assets/projects/notfadeIcon.png'
import D20 from '../assets/projects/D20Icon.png'
import weatherapp from '../assets/projects/weatherIcon.png'
import penguinFlow from '../assets/projects/penguinFlow.png'
import sealions from '../assets/projects/Sealions.png'
import sharktank from '../assets/projects/sharktank.png'
import './List.css';







export function List() {
    return (
        <div className="portfolio">
            <h1>Rick's Portfolio</h1>
            <p>All of the images below are projects of mine. Some are web applications I have created and others are projects that I am very proud of working in Zoo's and Aquariums</p>
            <br></br>
            <br></br>
            <ImageList sx={{ width: 900, height: 500 }}>
                <ImageListItem key="Subheader" cols={2}>

                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <Link to={item.link} rel="noopener noreferrer">
                            <img
                                srcSet={`${item.img}?w=400&h=250&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=400&h=250&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"

                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.description}
                                position="top"
                            />
                        </Link>
                    
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

const itemData = [
    {
        img: D20,
        title: "Rolling D20 App",
        description: "HTML, CSS, JavaScript",
        link: "https://rstuckey1.github.io/Dice-Rolling-D20/",
    },
    {
        img: booksearch,
        title: "Book Search App",
        description: "MongoDB, Express, React, Node",
        link: "https://booksearchmern-lsoz.onrender.com/",
    },
    {
        img: weatherapp,
        title: "5-day Weather Forecast Dashboard",
        description: "HTML, CSS, BootStrap, TypeScript, Wait-ON, Concurrently",
        link: "https://weather-95ia.onrender.com/",
    },
    {
        img: penguinFlow,
        title: "Penguin Exhibit Filtration Upgrade",
        description: "Safety improvements to a penguin exhibit filtration system",
        link: "/FlowMeters",
    },
    {
        img: sealions,
        title: "Sea Lion Holding System",
        description: "pump/filtration/automated chemical system",
        link: "/Sealion",
    },
    {
        img: sharktank,
        title: "Solving a Fluke Problem",
        description: "Flukes in a Shark Tank",
        link: "/QT",
    },
    {
        img: getitdone,
        title: "Get It Done",
        description: "Sequel, Express, TypeScript",
        link: "https://github.com/RStuckey1/Get-It-Done",
    },
    {
        img: carpalapp,
        title: "Car Maintenance Tracker",
        description: "React, PostgreSQL, Express, Node, TypeScript",
        link: "https://github.com/RStuckey1/Car-Pal-",
    },
    {
        img: gastroBook,
        title: "Food Recipe Social Platform",
        description: "GraphQL, React, Node, Express, TypeScript",
        link: "https://github.com/RStuckey1/Gastro-Book",

    },
    {
        img: notfadeaway,
        title: "Musical Equipment Business Website",
        description: "React, JavaScript, MUI",
        link: "https://github.com/RStuckey1/NotFadeAway",

    },
];

export default List;