import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Experience = () => {
    return (
        <Box id="experience" sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom sx={{ mb: { xs: 4, md: 6 }, borderBottom: '1px solid', borderColor: 'divider', pb: 2, display: 'inline-block', fontSize: { xs: '2rem', md: '3rem' } }}>
                    Experience
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Box sx={{ p: { xs: 3, md: 4 }, border: '1px solid', borderColor: 'divider', borderRadius: '16px', bgcolor: 'background.paper' }}>
                            <Grid container justifyContent="space-between" alignItems="flex-start" flexDirection={{ xs: 'column', md: 'row' }} spacing={2}>
                                <Grid item>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'text.primary', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>Frontend Developer</Typography>
                                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>Ascendion</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" sx={{ color: 'text.primary', border: '1px solid', borderColor: 'divider', px: 2, py: 0.5, borderRadius: '20px', display: 'inline-block', fontSize: { xs: '0.9rem', md: '1rem' } }}>2024 - Present</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                                Over 2 years of experience focusing on JavaScript and TypeScript. Building responsive, high-performance web applications and staying updated with the latest technologies in the frontend ecosystem.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Experience;
