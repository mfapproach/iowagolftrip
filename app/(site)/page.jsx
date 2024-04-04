"use client"
import { Box, Button, CircularProgress, Container, FormControl, FormLabel, Grid, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
import React, { Component, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ArrowCircleRight, ArrowForward, ArrowRight, KeyboardArrowRight, KeyboardArrowRightOutlined, KeyboardArrowRightTwoTone, Launch } from '@mui/icons-material';
import Link from 'next/link';


const HomePage = () => {

    const [email, setEmail] = useState('');
    const [waiting, setWaiting] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    async function submitEmail() {
        setWaiting(true)
        try {
            await axios({
                url: 'https://us-central1-mfa-platform.cloudfunctions.net/email',
                method: 'POST',
                data: {
                    to: 'pete@mfapproach.com',
                    subject: 'Iowa Golf - Submission',
                    text: `Email: ${email}.`,
                    html: `Email: ${email}.`,
                },
            });
        } catch (err) {
            console.log(err);
        } finally {
            setWaiting(false)
            setAlertOpen(true)
            setEmail('')
        }

    }

    return (<>
        <Container
            maxWidth={false}
            sx={{
                position: 'relative',
                backgroundPosition: 'center bottom',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '70vh',
                backgroundImage: 'url(/pondfog.jpg)',
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
            >

                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: -50 }}
                        transition={{ type: 'spring', stiffness: 40 }}
                    >
                        <Box sx={{ maxWidth: 800 }}>
                            <Typography paragraph variant="h3" color="white">
                                More unique golf experiences coming soon...
                            </Typography>
                            <Box sx={{ width: 350, maxWidth: '100%' }}>
                                <FormControl fullWidth>
                                    <FormLabel sx={{ color: 'white', fontWeight: 'bold' }}>Interested?</FormLabel>
                                    <TextField
                                        InputProps={{
                                            style: {
                                                color: 'white',
                                                fontSize: 18 // Set the text color to white
                                            },
                                            endAdornment: <InputAdornment position="end">
                                                <IconButton
                                                    disabled={waiting || !email}
                                                    size="large" color="primary" onClick={() => {
                                                        submitEmail()
                                                    }}>
                                                    {waiting ? <CircularProgress size={20} /> : <ArrowCircleRight />}
                                                </IconButton>
                                            </InputAdornment>
                                        }}
                                        fullWidth
                                        sx={{ borderRadius: 2, backgroundColor: 'rgba(0,0,0,0.5)' }}
                                        variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Typography color="primary" variant="body2">Provide your email for alerts</Typography>
                                </FormControl>
                            </Box>



                            {/* <Button variant="contained" color='primary' endIcon={<Launch />} href="https://airbnb.com/h/cp3" target="_blank">Explore Iowa Golf</Button> */}
                        </Box>
                    </motion.div>
                </Container>


            </Box>
        </Container>
        <Container sx={{ pb: 5 }}>

            <Grid sx={{ transform: 'translateY(-100px)' }} container justifyContent="space-around">
                <Grid item xs={10} md={5}>
                    <Box boxShadow={5} width="100%" borderRadius={3} backgroundColor="white" m={2}>
                        <Box p={1} display="flex" alignItems="center">
                            <img src="/images/collisonpar3logo.png" height={40} width="auto" />
                            <Link target="_blank" href="https://airbnb.com/h/cp3">
                                <Typography sx={{ ml: 1 }} variant="h4">The Collison</Typography>
                            </Link>

                        </Box>
                        <img src="/house/house.jpg" style={{ objectFit: 'cover' }} width="100%" height={250} />
                        <Box p={2}>
                            <Typography paragraph color="textSecondary">Welcome to this unique 40-acre property that includes a privately owned par 3 golf course, beautiful screened porch, pool house, and a heated pool.</Typography>
                            <Box display="flex" justifyContent="flex-end">
                                <Button target="_blank" variant="contained" href="https://airbnb.com/h/cp3">View on Airbnb</Button>

                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>

        <Snackbar
            open={alertOpen}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={6000}
            onClose={() => setAlertOpen(false)}
            message="Thank you for your submission. We will contact you shortly."
        />

    </>

    );
}

export default HomePage;