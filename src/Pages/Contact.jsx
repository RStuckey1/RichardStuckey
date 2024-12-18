// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#00b9c0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    borderRadius: '10px',
    margin: '30px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 3,
    ...theme.applyStyles('dark', {
        backgroundColor: '#333',
        color: '#fff',
    }),
}));

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
    };

    return (
        <>
            <Box 
                component="contactForm"
                sx={{ '& .MultiTextField-root': { m: 2, width: '50ch' }}}
                display="flex"
                justifyContent="center"
                width= "50%"
                alignItems="center"           
                noValidate
                autocomplete="off"
            >
                {/* <Box sx={{ width: 200 }}> */}
                    <Stack
                        spacing={{ xs: 1, md: 2 }}
                        directions="row"
                        useFlexGap
                        sx={{ flexwrap: 'wrap' }}
                    >
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <Item>
                                    <TextField    
                                        required
                                        id="Name"
                                        label="Name"
                                        margin="dense"
                                    />
                                </Item>
                                <Item>
                                    <TextField
                                        required
                                        id="Email"
                                        label="Email"
                                        margin="dense"
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
                                    />
                                </Item>
                                <Item>
                                    <Button
                                        variant="contained"
                                        size="medium"
                                        color="primary"
                                        type="submit"
                                    >SEND</Button>
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