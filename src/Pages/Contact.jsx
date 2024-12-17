import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';

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
                component="form"
                sx={{ '& .MultiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autyocomplete="off"
            >
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <TextField
                            required
                            id="Name"
                            label="Name"
                        />
                        <TextField
                            required
                            id="Email"
                            label="Email"
                        />
                        <TextField
                            required
                            id="Message"
                            label="Message"
                            multiline
                            maxRows={8}
                        />
                        <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                            type="submit"
                        >SEND</Button>


                    </div>
                </form>
            </Box>
        </>
    );
};
export default Contact;