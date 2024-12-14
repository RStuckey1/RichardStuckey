
import { Link } from 'react-router-dom';
import linkedin from './assets/linkedin.jpg';
import github from './assets/github.jpg';
import { Box } from '@mui/material';

function Footer() {

    return(
        
            <Box sx = {{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'row', 
            height: '100px'}}>
            
            <Link to="https://www.linkedin.com/in/richard-stuckey-9b2910234/" target="_blank">
                <img className="linkedinIcon" src={linkedin} alt="linkedinicon"></img>
            </Link>
            <p>&copy; {new Date().getFullYear()} Richard Stuckey</p>
            <Link to="https://www.github.com/RStuckey1" target="_blank">          
            <img className="github" src={github} alt="github"></img>
            </Link>
            </Box>
    
    );
    }

    export default Footer