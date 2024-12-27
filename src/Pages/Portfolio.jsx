import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CardRGD20 from '../ProjectCards/CardRGD20';
import CardGetItDone from '../ProjectCards/CardGetItDone';
import CardCarPal from '../ProjectCards/CardcCarPal';
import CardGastroBook from '../ProjectCards/CardGastroBook';
import CardNotFadeAway from '../ProjectCards/CardNotFadeAway';
import CardBookSearch from '../ProjectCards/CardBookSearch';
import CardWeatherApp from '../ProjectCards/CardWeatherApp';
import './Portfolio.css';
import { Box } from '@mui/material';

   




function Portfolio() {
    return (
        <>
            <Box sx={{ 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                }}>
            <div>
                <h2>Portfolio</h2>
                <p>Here are some of the projects I have worked on:</p>

            </div>
            <ImageList sx={{ 
                width:1200, 
                height: 1000, 
                ml: 10
                }} cols={2} rowHeight={250} gap={50}
                padding={10}
                >
          
                <CardRGD20 />
                <CardGetItDone />
                <CardCarPal />
                <CardGastroBook />
                <CardNotFadeAway />
                <CardBookSearch />
                <CardWeatherApp />          
        </ImageList>
        </Box>
        </>
    );
}

export default Portfolio;