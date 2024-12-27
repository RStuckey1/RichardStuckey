import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(50px)',
    boxshadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    borderRadius: '10px',
    margin: '30px',
    textAlign: 'center',
}),
);

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
            <h1>To get in touch, send me a message...</h1>
            <h2>...or find me on LinkedIn or GitHub(click the icons below)</h2>
            <Box
                component="contactForm"
                sx={{ '& .MultiTextField-root': { m: 2, width: '50ch' } }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                noValidate
                autocomplete="off"
               
            >
            
                {/* <Box sx={{ width: 200 }}> */}
                <Stack
                    spacing={{ xs: 1, md: 2 }}
                    directions="row"
                    useFlexGap
                    sx={{ flexwrap: 'wrap', width: '80%', justifyContent: 'center' }}
                >
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <Item>
                                <TextField
                                    required
                                    id="Name"
                                    label="Name"
                                    margin="dense"
                                    sx={{ width: '100%', borderRadius: '20px' }}
                                    InputColor="rgba(255, 255, 255, 0.05);"




                                />
                            </Item>
                            <Item>
                                <TextField
                                    required
                                    id="Email"
                                    label="Email"
                                    margin="dense"
                                    sx={{ width: '100%', borderRadius: '20px' }}
                                />
                            </Item>
                            <Item>
                                <TextField
                                    required
                                    id="Message"
                                    label="Message"
                                    multiline
                                    minRows={2}
                                    margin="dense"
                                    sx={{ width: '100%', borderRadius: '20px' }}
                                />
                            </Item>
                            <Item>
                                <Button
                                    variant="contained"
                                    size="medium"
                                    color="black"
                                    type="submit"
                                >Send Rick Your Message</Button>
                            </Item>


                        </div>
                    </form>
                </Stack>
            </Box>
            {/* </Box> */}
        </>
    );
};
export default Contact;