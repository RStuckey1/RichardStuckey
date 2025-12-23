import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import linkedin from '../assets/linkedin.png';
import github from '../assets/githubCat.png';
import '../index.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#4D194D',
    padding: theme.spacing(2),
    borderRadius: '10px',
    border: '2px solid #06E8C6',
    margin: '30px',
    textAlign: 'center',
}),
);

const theme = createTheme({
    palette: {
        primary: {
            main: "#83cbc7"
        },
        secondary: {
            main: "#06E8C6"
        },
    }
});

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_jronltk', 'template_ks3c6kw', form.current, {
                publicKey: 'wWkycOEtsOwnBwDZI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        form.current.reset();
    };

    return (
        <>
            <div className="contact">
                <h2>To get in touch, send me a message...</h2>
                <h3>...or find me on LinkedIn or GitHub(click the icons below)</h3>
                <br></br>
                <br></br>
                <div className="information">
                    <Link to="https://www.linkedin.com/in/richard-s-9b2910234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B42HfR69bRbCZkx51P2F0OQ%3D%3D" target="_blank">
                        <img className="linkedinIcon" src={linkedin} alt="linkedinicon"></img>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to="https://www.github.com/RStuckey1" target="_blank">
                        <img className="github" src={github} alt="github"></img>
                    </Link>
                </div>

            </div>
            <Box
                component="contactForm"
                display="flex"
                justifyContent="center"
                alignItems="center"
                noValidate
                autocomplete="off"

            >

                {/* <Box sx={{ width: 200 }}> */}
                <ThemeProvider theme={theme}>
                    <Stack
                        spacing={{ xs: 1, md: 2 }}
                        directions="row"
                        useFlexGap
                        sx={{ flexwrap: 'wrap', width: '80%', justifyContent: 'center' }}
                    >
                        <form ref={form} onSubmit={sendEmail}>
                            <Item>
                                <TextField
                                    required
                                    input type='name'
                                    name='from_name'
                                    label="name"
                                    margin="dense"
                                    sx={{ width: '100%', borderRadius: '10px', border: '2px solid #06E8C6' }}
                                    InputColor='#4d194d'
                                />
                            </Item>
                            <Item>
                                <TextField
                                    required
                                    input type='email'
                                    name='email_from'
                                    label="email"
                                    margin="dense"
                                    sx={{ width: '100%', borderRadius: '10px', border: '2px solid #06E8C6' }}
                                />
                            </Item>
                            <Item>
                                <TextField
                                    required
                                    input type='message'
                                    name='message'
                                    label="message"
                                    multiline
                                    minRows={8}
                                    margin="dense"
                                    sx={{ width: '100%', borderRadius: '20px', border: '2px solid #06E8C6'}}
                                />
                            </Item>
                            <Item>
                                <Button
                                    variant="contained"
                                    sx={({ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' })}
                                    size="medium"
                                    color="secondary"
                                    type="submit"
                                >Send Richard Your Message</Button>
                            </Item>



                        </form>
                    </Stack>
                </ThemeProvider>
            </Box>

        </>
    );
};
export default Contact;