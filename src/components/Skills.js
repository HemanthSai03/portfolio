import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const skills = {
    Frontend: ['React', 'Redux', 'Material UI', 'Bootstrap', 'Next.js', 'Angular'],
    Languages: ['JavaScript', 'TypeScript', 'SQL', 'REST', 'GraphQL'],
    Tools: ['Git', 'GitHub', 'Jira', 'VS Code', 'Postman'],
    Cloud: ['Power Apps', 'Google Cloud Platform (GCP)'],
    Methodologies: ['SDLC', 'CI/CD', 'Gitflow']
};

const Skills = () => {
    const theme = useTheme();

    return (
        <Box id="skills" sx={{ py: { xs: 8, md: 12 }, mb: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom sx={{ mb: { xs: 4, md: 6 }, borderBottom: '1px solid', borderColor: 'divider', pb: 2, display: 'inline-block', color: 'text.primary', fontSize: { xs: '2rem', md: '3rem' } }}>
                    Skills
                </Typography>

                {Object.entries(skills).map(([category, items], sectionIndex) => (
                    <Box key={category} sx={{ mb: { xs: 6, md: 8 } }}>
                        <Typography variant="h5" sx={{ mb: { xs: 2.5, md: 3 }, color: 'text.secondary', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                            {category}
                        </Typography>
                        <Grid container spacing={2}>
                            {items.map((skill, index) => (
                                <Grid item key={skill}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.1
                                        }}
                                        viewport={{ once: true }}
                                        style={{ display: 'inline-block' }}
                                    >
                                        <Box
                                            sx={{
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                                                borderRadius: '20px',
                                                px: { xs: 2, md: 3 },
                                                py: { xs: 1, md: 1.5 },
                                                color: 'text.primary',
                                                transition: 'all 0.3s ease',
                                                cursor: 'default',
                                                '&:hover': {
                                                    bgcolor: 'action.hover',
                                                    transform: 'translateY(-3px)',
                                                    borderColor: 'text.primary',
                                                    boxShadow: theme.shadows[2]
                                                }
                                            }}
                                        >
                                            <Typography sx={{ fontWeight: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}>{skill}</Typography>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default Skills;
