"use client"
import { Box, Button, Container, Typography } from '@mui/material';
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Launch } from '@mui/icons-material';


const HomePage = () => {




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
                height: '100vh',
                backgroundImage: 'url(/pondfog.jpg)',
            }}
        >
            <Box
                display="flex"
                // justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.4)',
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
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 40 }}
                    >
                        <Box sx={{ maxWidth: 600 }}>
                            <Typography variant="h3" color="white">
                                Unique experiences coming soon...
                            </Typography>
                            <Button endIcon={<Launch />} href="https://airbnb.com/h/cp3" target="_blank">Explore Iowa Golf</Button>
                        </Box>
                    </motion.div>
                </Container>


            </Box>
        </Container>



    </>

    );
}

export default HomePage;