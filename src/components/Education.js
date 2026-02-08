import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const educationData = [
    {
        degree: 'Bachelor of Technology - Computer Science and Engineering',
        institution: 'VEL TECH RANGARAJAN INSTITUTE OF SCIENCE AND TECHNOLOGY',
        year: '2020 - 2024',
        grade: 'CGPA: 9.0'
    },
    {
        degree: 'Intermediate - MPC',
        institution: 'NARAYANA IIT ACADEMY',
        year: '2018 - 2020',
        grade: 'CGPA: 9.2'
    },
    {
        degree: 'SSC',
        institution: 'SRI CHAITANYA TECHNO SCHOOL',
        year: '2017 - 2018',
        grade: 'CGPA: 9.8'
    }
];

const Education = () => {
    return (
        <Box id="education" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h3" gutterBottom sx={{ mb: { xs: 4, md: 6 }, borderBottom: '1px solid', borderColor: 'divider', pb: 2, display: 'inline-block', color: 'text.primary', fontSize: { xs: '2rem', md: '3rem' } }}>
                        Education
                    </Typography>
                </motion.div>

                <Box sx={{ position: 'relative', borderLeft: '2px solid', borderColor: 'divider', ml: { xs: 1, md: 2 }, paddingLeft: { xs: 2, md: 4 } }}>
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ mb: { xs: 4, md: 6 }, position: 'relative' }}>
                                {/* Timeline Dot */}
                                <Box sx={{
                                    position: 'absolute',
                                    left: { xs: -27, md: -42 },
                                    top: 0,
                                    bgcolor: 'background.default',
                                    border: '2px solid',
                                    borderColor: 'text.primary',
                                    borderRadius: '50%',
                                    width: { xs: 16, md: 20 },
                                    height: { xs: 16, md: 20 },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 1
                                }}>
                                    <Box sx={{ width: { xs: 6, md: 8 }, height: { xs: 6, md: 8 }, bgcolor: 'text.primary', borderRadius: '50%' }} />
                                </Box>

                                <Card sx={{
                                    bgcolor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: '16px',
                                    color: 'text.primary',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateX(10px)',
                                        borderColor: 'text.primary',
                                        bgcolor: 'action.hover'
                                    }
                                }}>
                                    <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                                        <Grid container justifyContent="space-between" alignItems="flex-start" spacing={2}>
                                            <Grid item xs={12} md={9}>
                                                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                                                    {edu.degree}
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1, display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                                                    <SchoolIcon sx={{ fontSize: { xs: 18, md: 20 } }} /> {edu.institution}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                                                <Typography variant="subtitle1" sx={{
                                                    color: 'primary.main',
                                                    border: '1px solid',
                                                    borderColor: 'divider',
                                                    px: 2,
                                                    py: 0.5,
                                                    borderRadius: '20px',
                                                    display: 'inline-block',
                                                    mb: 1,
                                                    fontSize: { xs: '0.85rem', md: '1rem' }
                                                }}>
                                                    {edu.year}
                                                </Typography>
                                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', mt: 1 }}>
                                                    {edu.grade}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Education;
