import * as React from 'react';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import booksearch from '../assets/booksearch.png'
import carpalapp from '../assets/carpalapp.png'
import gastroBook from '../assets/gastroBook.png'
import getitdone from '../assets/getitdone.png'
import notfadeaway from '../assets/notfadeaway.png'
import D20 from '../assets/D20.png'
import weatherapp from '../assets/weatherapp.png'







export function List() {
    return (
        <div>
            <ImageList sx={{ width: 500, height: 450 }}>
                <ImageListItem key="Subheader" cols={2}>

                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            position="top"
                        />

                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

const itemData = [
    {
        img: D20,
        title: <Link to="/D20">Dice Rolling D20</Link>,
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: getitdone,
        title: <Link to="/GetItDone">Get It Done</Link>,
    },
    {
        img: carpalapp,
        title: <Link to="/CarPal">CarPal</Link>,
    },
    {
        img: gastroBook,
        title: <Link to="/GastroBook">Gastro Book</Link>,
        cols: 2,
    },
    {
        img: notfadeaway,
        title: <Link to="/NotFadeAway">Not Fade Away</Link>,
        cols: 2,
    },
    {
        img: booksearch,
        title: <Link to="/BookSearch">Book Search</Link>,
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: weatherapp,
        title: <Link to="/WeatherApp">Weather App</Link>,
    },
];

export default List;