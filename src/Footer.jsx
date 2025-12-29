
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
            padding: '40px 60px',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: 'auto',
            width: '100%',
            boxSizing: 'border-box',
            '@media (max-width: 768px)': {
            },
            '@media (max-width: 480px)': {
                flexDirection: 'column',
            }
        }}>

            <Link to="https://www.linkedin.com/in/richard-s-9b2910234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkgkYohIYQSyxne%2BeREaUkA%3D%3D" target="_blank">
                <img className="linkedinIcon" src={linkedin} alt="linkedinicon" style={{
                    maxWidth: '50px',
                    width: '100%',
                    height: 'auto',
                    transition: 'transform 0.3s ease'
                }}></img>
            </Link>
            <p style={{
                margin: '0',
                fontSize: '1rem',
                '@media (max-width: 480px)': {
                    fontSize: '0.9rem'
                }
            }}>&copy; {new Date().getFullYear()} Richard Stuckey</p>
            <Link to="https://www.github.com/RStuckey1" target="_blank">
                <img className="github" src={github} alt="github" style={{
                    maxWidth: '50px',
                    width: '100%',
                    height: 'auto',
                    transition: 'transform 0.3s ease'
                }}></img>
            </Link>
        </Box>
    </>
    );
}

export default Footer