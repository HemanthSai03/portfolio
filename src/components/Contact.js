import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
    const contactInfo = [
        { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hemanth-sai-696219276/' },
        { icon: <EmailIcon />, label: 'hemanthsai0119@gmail.com', href: 'mailto:hemanthsai0119@gmail.com' },
        { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/HemanthSai03' },
        { icon: <PhoneIcon />, label: '6304322077', href: 'tel:6304322077' },
    ];

    return (
        <Box id="contact" sx={{ py: 10, bgcolor: 'background.paper', textAlign: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom sx={{ mb: 6 }}>
                    Contact Me
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="center">
                    {contactInfo.map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            <IconButton
                                component="a"
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    bgcolor: 'primary.main',
                                    color: 'background.paper',
                                    width: 60,
                                    height: 60,
                                    '&:hover': { bgcolor: 'primary.dark' },
                                }}
                            >
                                {item.icon}
                            </IconButton>
                            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                                {item.label}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Contact;
