
import { Link } from 'react-router-dom';
import Scroll from './components/Scroll.jsx'
import linkedin from './assets/linkedin.png';
import github from './assets/githubCat.png';
import { Box } from '@mui/material';


function Footer() {

    return (
    <>
        <Scroll/>
        <Box sx={{
            display: 'flex',
            padding: '80px',
            margin: '10px',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            height: '100px',
            '@media (max-width: 768px)': {
                padding: '40px 20px',
                height: 'auto'
            },
            '@media (max-width: 480px)': {
                padding: '20px 10px',
                flexDirection: 'column',
                gap: '20px'
            }
        }}>

            <Link to="https://www.linkedin.com/in/richard-s-9b2910234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkgkYohIYQSyxne%2BeREaUkA%3D%3D" target="_blank">
                <img className="linkedinIcon" src={linkedin} alt="linkedinicon" style={{maxWidth: '100px', width: '100%', height: 'auto'}}></img>
            </Link>
            <p>&copy; {new Date().getFullYear()} Richard Stuckey</p>
            <Link to="https://www.github.com/RStuckey1" target="_blank">
                <img className="github" src={github} alt="github" style={{maxWidth: '100px', width: '100%', height: 'auto'}}></img>
            </Link>
        </Box>
    </>
    );
}

export default Footer