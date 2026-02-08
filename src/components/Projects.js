import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Dialog,
    DialogContent,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from 'framer-motion';

import codeBridgeImg from '../assets/codeBridge.png';
import canteenImg from '../assets/CanteenSystem.png';
import aqiImg from '../assets/AQI.png';
import tradingImg from '../assets/TradingAlertSystem.png';

const projects = [
    {
        title: 'Code Bridge (Client Project)',
        role: 'Frontend Developer',
        image: codeBridgeImg,
        tech: ['React', 'BigQuery', 'Python', 'GitHub Integration', 'PingFederate (SSO)'],
        description: 'A scalable web-based platform for code modernization and discovery, streamlining engineering workflows.',
        details: [
            'Developed a scalable web-based platform for code modernization, providing capabilities such as Code Conversion, Code Discovery, and a Prompt Builder to streamline engineering workflows.',
            'Implemented automated migration pipelines for transforming Teradata, SQL, SAS, and Python code to BigQuery SQL and Python, with real-time execution tracking and seamless GitHub integration.',
            'Designed intuitive dashboards and end-to-end workflows for code analysis, lineage tracking, and visualization to enhance system transparency and developer productivity.',
            'Integrated CVS Health SSO using PingFederate, enabling secure enterprise authentication and centralized access management across the platform.'
        ]
    },
    {
        title: 'Canteen Management System',
        role: 'Developer',
        image: canteenImg,
        tech: ['MERN Stack', 'GraphQL', 'MongoDB', 'React.js'],
        description: 'A rule-based canteen management system supporting web and mobile platforms with shopping cart functionality.',
        details: [
            'Developed a rule-based canteen management system using MERN stack and GraphQL, supporting both web and mobile platforms.',
            'Implemented features like user authentication, menu management, and shopping cart functionality.',
            'Deployed a responsive frontend using React.js and managed data efficiently with MongoDB.',
            'Followed Agile Scrum methodology to ensure iterative delivery and continuous improvement.'
        ]
    },
    {
        title: 'Air Quality Index Detection',
        role: 'ML Engineer',
        image: aqiImg,
        tech: ['Python', 'Machine Learning', 'Random Forest', 'IoT Sensors'],
        description: 'IoT-based pollutant monitoring system using Random Forest Algorithm to estimate AQI.',
        details: [
            'Collected and analyzed pollutant datasets using IoT sensors to monitor air quality in polluted areas.',
            'Developed a predictive model using Random Forest Algorithm to estimate the Air Quality Index (AQI).',
            'Provided actionable insights to assess whether specific areas are safe or harmful for living.',
            'Implemented data preprocessing and feature engineering to improve model accuracy.'
        ]
    },
    {
        title: 'Trading Alert System',
        role: 'Blockchain Developer',
        image: tradingImg,
        tech: ['Blockchain', 'Bitcoin API', 'Real-time Monitoring'],
        description: 'Bitcoin price alert system using Blockchain technology with real-time notifications.',
        details: [
            'Developed a Bitcoin price alert system using Blockchain technology to monitor real-time prices.',
            'Implemented logic to compare current Bitcoin price with user-defined selling price.',
            'Triggered automated alerts via buzzer, email, and SMS when price conditions were met.',
            'Ensured real-time monitoring and notification by continuously checking price updates.'
        ]
    },
];

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const theme = useTheme();

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    return (
        <Box id="projects" sx={{ py: 12 }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h3" gutterBottom sx={{ mb: 6, borderBottom: '1px solid', borderColor: 'divider', pb: 2, display: 'inline-block' }}>
                        Projects
                    </Typography>
                </motion.div>

                {/* Reduced spacing to fit side-by-side better on small screens */}
                <Grid container spacing={2}>
                    {projects.map((project, index) => (
                        // Changed xs from 12 to 6 to force side-by-side on mobile
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ height: '100%' }} // Ensure motion div takes full height
                            >
                                <Card
                                    onClick={() => handleOpen(project)}
                                    sx={{
                                        height: '100%',
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: '16px',
                                        color: 'text.primary',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease-in-out',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            borderColor: 'text.primary',
                                            boxShadow: theme.shadows[4]
                                        }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            objectFit: 'cover',
                                            height: { xs: 120, sm: 140 },
                                            filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                                            transition: '0.3s',
                                            '.MuiCard-root:hover &': {
                                                filter: 'brightness(1)'
                                            }
                                        }}
                                    />
                                    <CardContent sx={{ p: { xs: 1.5, sm: 2 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '0.85rem', sm: '1rem' }, lineHeight: 1.2 }}>
                                            {project.title}
                                        </Typography>
                                        <Typography sx={{ mb: { xs: 1, sm: 2 }, color: 'primary.main', fontSize: { xs: '0.65rem', sm: '0.75rem' }, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                            {project.role}
                                        </Typography>

                                        {/* Description Removed as requested */}

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto' }}>
                                            {project.tech.slice(0, 3).map((tech, i) => (
                                                <Box key={i} sx={{
                                                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                                    px: 0.75,
                                                    py: 0.25,
                                                    borderRadius: '4px',
                                                    border: '1px solid',
                                                    borderColor: 'divider',
                                                    fontSize: { xs: '0.6rem', sm: '0.65rem' },
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {tech}
                                                </Box>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <Box sx={{ px: 0.5, py: 0.25, fontSize: '0.6rem', color: 'text.secondary', display: 'flex', alignItems: 'center' }}>+{project.tech.length - 3}</Box>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Project Details Dialog */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="md"
                    fullWidth
                    PaperProps={{
                        sx: {
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            borderRadius: '20px',
                            border: '1px solid',
                            borderColor: 'divider',
                            maxHeight: '90vh',
                            m: 2
                        }
                    }}
                >
                    {selectedProject && (
                        <>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={selectedProject.image}
                                    alt={selectedProject.title}
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
                                        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                                        objectFit: 'cover'
                                    }}
                                />
                                <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={{
                                        position: 'absolute',
                                        right: { xs: 8, md: 16 },
                                        top: { xs: 8, md: 16 },
                                        color: { xs: 'text.primary', md: '#fff' },
                                        bgcolor: { xs: 'transparent', md: 'rgba(0,0,0,0.5)' },
                                        '&:hover': { bgcolor: { xs: 'action.hover', md: 'rgba(0,0,0,0.8)' } },
                                        zIndex: 1
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Box sx={{
                                    position: { xs: 'relative', md: 'absolute' },
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    p: { xs: 3, md: 4 },
                                    background: { xs: 'none', md: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' },
                                    pt: { xs: 5, md: 4 }
                                }}>
                                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 0.5, color: { xs: 'text.primary', md: '#fff' }, pr: 4, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                                        {selectedProject.title}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: 'primary.main', textTransform: 'uppercase', letterSpacing: 1.2, fontSize: { xs: '0.75rem', md: '0.9rem' } }}>
                                        {selectedProject.role}
                                    </Typography>
                                </Box>
                            </Box>

                            <DialogContent sx={{ p: 4 }}>
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', mb: 1.5, letterSpacing: 1 }}>
                                        Technologies
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {selectedProject.tech.map((tech, i) => (
                                            <Box key={i} sx={{
                                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                                px: 2,
                                                py: 0.8,
                                                borderRadius: '20px',
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                fontSize: '0.85rem',
                                                color: 'text.primary'
                                            }}>
                                                {tech}
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>

                                <Box>
                                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', mb: 2, letterSpacing: 1 }}>
                                        Key Contributions
                                    </Typography>
                                    <List disablePadding>
                                        {selectedProject.details.map((detail, index) => (
                                            <ListItem key={index} alignItems="flex-start" sx={{ px: 0, py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                                                    <ArrowRightIcon sx={{ color: 'primary.main' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={detail}
                                                    primaryTypographyProps={{ sx: { color: 'text.secondary', lineHeight: 1.7, fontSize: '1rem' } }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </DialogContent>
                        </>
                    )}
                </Dialog>

            </Container>
        </Box>
    );
};

export default Projects;
