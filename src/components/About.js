import React from 'react';
import { Box, Container, Grid, Typography, useTheme, useMediaQuery, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import image1 from '../assets/image1.png';

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const content = (
        <>
            {/* Left Side - Text */}
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 1 }, textAlign: { xs: 'center', md: 'left' } }}>
                <Box>
                    <Typography variant="h1" component="h1" gutterBottom sx={{ lineHeight: 1.1, color: 'text.primary', fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' } }}>
                        HEMANTH SAI V
                    </Typography>
                    <Typography variant="h5" component="h2" sx={{ color: 'text.secondary', mb: 3, textTransform: 'uppercase', letterSpacing: 2, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                        Frontend Developer
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8, color: 'text.secondary', maxWidth: { xs: '100%', md: '90%' }, mx: { xs: 'auto', md: 0 } }}>
                        Software Engineer with 2 years of experience in client-facing service-based projects. Specialized in developing and enhancing enterprise applications using React, Node.js, and Modern JavaScript.
                    </Typography>

                    <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/hemanth-sai-696219276/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: '#0A66C2', // LinkedIn blue
                                '&:hover': { transform: 'scale(1.1)', bgcolor: 'rgba(10, 102, 194, 0.1)' },
                                transition: 'all 0.3s'
                            }}
                        >
                            <LinkedInIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://github.com/HemanthSai03"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: 'text.primary',
                                '&:hover': { transform: 'scale(1.1)', bgcolor: 'action.hover' },
                                transition: 'all 0.3s'
                            }}
                        >
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="mailto:hemanthsai0119@gmail.com"
                            sx={{
                                color: '#EA4335', // Gmail red
                                '&:hover': { transform: 'scale(1.1)', bgcolor: 'rgba(234, 67, 53, 0.1)' },
                                transition: 'all 0.3s'
                            }}
                        >
                            <EmailIcon fontSize="large" />
                        </IconButton>
                    </Stack>
                </Box>
            </Grid>

            {/* Right Side - Image */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, order: { xs: 2, md: 2 } }}>
                <Box
                    component="img"
                    src={image1}
                    alt="Hemanth Sai V"
                    sx={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto',
                        borderRadius: '20px',
                        boxShadow: theme.palette.mode === 'dark' ? '0 20px 50px rgba(255,255,255,0.05)' : theme.shadows[10],
                        filter: theme.palette.mode === 'dark' ? 'grayscale(100%) brightness(0.8) contrast(1.2)' : 'grayscale(0%)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            filter: 'grayscale(0%) brightness(1) contrast(1)',
                            transform: 'scale(1.02)'
                        }
                    }}
                />
            </Grid>
        </>
    );

    return (
        <Box id="about" sx={{ minHeight: { xs: 'auto', md: '90vh' }, display: 'flex', alignItems: 'center', py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                {isMobile ? (
                    <Grid container spacing={4} alignItems="center">
                        {content}
                    </Grid>
                ) : (
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {content}
                    </Grid>
                )}
            </Container>
        </Box>
    );
};

export default About;
