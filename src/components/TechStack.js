import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const techStack = [
    { name: 'React', url: 'https://react.dev/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Redux', url: 'https://redux.js.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Next.js', url: 'https://nextjs.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Angular', url: 'https://angular.io/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Material UI', url: 'https://mui.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Git', url: 'https://git-scm.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', url: 'https://github.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Jira', url: 'https://www.atlassian.com/software/jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'VS Code', url: 'https://code.visualstudio.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', url: 'https://www.postman.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Google Cloud', url: 'https://cloud.google.com/', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
];

const TechStack = () => {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;
        const speed = 1;

        const step = () => {
            if (!isPaused && scrollContainer) {
                const maxScrollLeft = scrollContainer.scrollWidth / 2;

                if (scrollContainer.scrollLeft >= maxScrollLeft) {
                    scrollContainer.scrollLeft -= maxScrollLeft;
                } else {
                    scrollContainer.scrollLeft += speed;
                }
            }
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <Box id="stack" sx={{ py: 8, bgcolor: 'background.default', overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h3" gutterBottom sx={{ mb: 6, borderBottom: '1px solid', borderColor: 'divider', pb: 2, display: 'inline-block', color: 'text.primary' }}>
                        Tech Stack
                    </Typography>
                </motion.div>
            </Container>

            {/* Scroll Container */}
            <Box
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                sx={{
                    display: 'flex',
                    overflowX: 'auto', // Enable manual scrolling
                    whiteSpace: 'nowrap',
                    width: '100%',
                    position: 'relative',
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE and Edge
                    '&::-webkit-scrollbar': {
                        display: 'none' // Chrome, Safari
                    },
                    cursor: 'grab',
                    '&:active': {
                        cursor: 'grabbing'
                    }
                }}
            >
                {/* Render Double List for Infinite Effect */}
                {[...techStack, ...techStack].map((tech, index) => (
                    <Box
                        key={`${tech.name}-${index}`}
                        component="a"
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            flex: '0 0 auto', // Don't shrink
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            color: 'text.primary',
                            mx: 4,
                            minWidth: '100px',
                            py: 2,
                            transition: 'transform 0.2s',
                            '&:hover': { transform: 'scale(1.1)' }
                        }}
                    >
                        <Box
                            component="img"
                            src={tech.logo}
                            alt={tech.name}
                            sx={{
                                width: '60px',
                                height: '60px',
                                mb: 1.5,
                                filter: 'grayscale(100%)',
                                transition: 'filter 0.3s',
                                '.MuiBox-root:hover &': {
                                    filter: 'grayscale(0%)'
                                }
                            }}
                            draggable="false" // Prevent image dragging ghost
                        />
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            {tech.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TechStack;
