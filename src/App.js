import React, { useState, useRef, useMemo } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
  Drawer,
  List,
  ListItem,
  TextField,
  InputAdornment,
  ListItemText,
  Collapse,
  Paper,
  ClickAwayListener,
  responsiveFontSizes
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as ScrollLink, scroller } from 'react-scroll';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechStack from './components/TechStack';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        background: {
          default: '#f5f5f5',
          paper: '#ffffff',
        },
        primary: {
          main: '#000000',
        },
        text: {
          primary: '#000000',
          secondary: '#555555',
        },
        divider: '#e0e0e0',
      }
      : {
        // palette values for dark mode
        background: {
          default: '#000000',
          paper: '#121212',
        },
        primary: {
          main: '#ffffff',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
      }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
      letterSpacing: '0.05em',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
      color: mode === 'light' ? '#555555' : '#b0b0b0',
    },
    h3: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '0.02em',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: mode === 'light' ? '#000' : '#fff',
          borderColor: mode === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
          '&:hover': {
            borderColor: mode === 'light' ? '#000' : '#fff',
            backgroundColor: mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
          color: mode === 'light' ? '#000' : '#fff'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: mode === 'light' ? '#fff' : '#000',
          color: mode === 'light' ? '#000' : '#fff',
          borderRight: `1px solid ${mode === 'light' ? '#e0e0e0' : '#333'}`
        }
      }
    }
  }
});

const searchableItems = [
  { label: 'About Me', id: 'about', type: 'Section' },
  { label: 'Experience', id: 'experience', type: 'Section' },
  { label: 'Calculated Risk', id: 'experience', type: 'Experience' },
  { label: 'Projects', id: 'projects', type: 'Section' },
  { label: 'Code Bridge', id: 'projects', type: 'Project' },
  { label: 'Canteen Management System', id: 'projects', type: 'Project' },
  { label: 'Air Quality Index Detection', id: 'projects', type: 'Project' },
  { label: 'Trading Alert System', id: 'projects', type: 'Project' },
  { label: 'Skills', id: 'skills', type: 'Section' },
  { label: 'React', id: 'skills', type: 'Skill' },
  { label: 'JavaScript', id: 'skills', type: 'Skill' },
  { label: 'Python', id: 'skills', type: 'Skill' },
  { label: 'Education', id: 'education', type: 'Section' },
  { label: 'Tech Stack', id: 'stack', type: 'Section' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // Theme state
  const [mode, setMode] = useState('dark');
  const searchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);

  const theme = useMemo(() => responsiveFontSizes(createTheme(getDesignTokens(mode))), [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/HEMANTH_SAI_resume (7).pdf';
    link.download = 'Hemanth_Sai_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { label: 'About Me', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
  ];

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        if (searchInputRef.current) searchInputRef.current.focus();
      }, 300); // Wait for animation
    } else {
      setSearchQuery('');
    }
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    if (!mobileSearchOpen) {
      setTimeout(() => {
        if (mobileSearchInputRef.current) mobileSearchInputRef.current.focus();
      }, 300); // Wait for animation
    } else {
      setSearchQuery('');
    }
  };

  const handleSearchSelect = (id) => {
    setSearchOpen(false);
    setMobileSearchOpen(false);
    setMobileOpen(false);
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
  };

  const filteredItems = searchableItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const drawer = (
    <Box sx={{ textAlign: 'center', height: '100%', pt: 2 }}>
      {/* Mobile Search */}
      <Box sx={{ px: 2, mb: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: { borderRadius: '20px' }
          }}
        />
        {searchQuery && (
          <Paper sx={{ mt: 1, maxHeight: '150px', overflowY: 'auto' }}>
            <List dense>
              {filteredItems.slice(0, 3).map((item, index) => (
                <ListItem button key={index} onClick={() => handleSearchSelect(item.id)}>
                  <ListItemText primary={item.label} secondary={item.type} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ScrollLink
              to={item.id}
              smooth={true}
              duration={800}
              offset={-70}
              spy={true}
              onClick={() => setMobileOpen(false)}
              style={{ width: '100%', textDecoration: 'none' }}
            >
              <Button
                sx={{
                  color: 'inherit',
                  width: '100%',
                  textTransform: 'none',
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                {item.label}
              </Button>
            </ScrollLink>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ justifyContent: 'center', mt: 2 }}>
          <Button
            variant="outlined"
            color="inherit"
            endIcon={<DownloadIcon />}
            onClick={(e) => { e.stopPropagation(); handleDownload(); }}
            sx={{
              borderRadius: '20px',
              px: 3,
              textTransform: 'none',
            }}
          >
            Resume
          </Button>
        </ListItem>
        {/* Mobile Theme Toggle */}
        <ListItem disablePadding sx={{ justifyContent: 'center', mt: 2 }}>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default', color: 'text.primary' }}>

        {/* Header */}
        <AppBar position="sticky" color="transparent" elevation={0} sx={{ py: 2, backdropFilter: 'blur(10px)' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

              {/* Mobile Menu Button - Left Corner */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    spy={true}
                    activeClass="active"
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <Button
                      color="inherit"
                      sx={{ fontSize: '1.1rem', textTransform: 'none' }}
                    >
                      {item.label}
                    </Button>
                  </ScrollLink>
                ))}
              </Box>

              {/* Right Side Actions: Search, Theme, Resume */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>

                {/* Search - Mobile & Desktop */}
                <ClickAwayListener onClickAway={() => {
                  if (searchOpen) setSearchOpen(false);
                  if (mobileSearchOpen) setMobileSearchOpen(false);
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    {/* Desktop Search Input */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                      <Collapse in={searchOpen} orientation="horizontal" timeout={300}>
                        <TextField
                          inputRef={searchInputRef}
                          variant="standard"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          InputProps={{
                            disableUnderline: true,
                            sx: {
                              color: 'inherit',
                              bgcolor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)',
                              borderRadius: '20px',
                              px: 2,
                              py: 0.5,
                              width: '200px',
                              mr: 1
                            }
                          }}
                        />
                      </Collapse>
                    </Box>

                    {/* Mobile Search Input */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                      <Collapse in={mobileSearchOpen} orientation="horizontal" timeout={300}>
                        <TextField
                          inputRef={mobileSearchInputRef}
                          variant="standard"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          InputProps={{
                            disableUnderline: true,
                            sx: {
                              color: 'inherit',
                              bgcolor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)',
                              borderRadius: '20px',
                              px: 2,
                              py: 0.5,
                              width: '120px',
                              mr: 1
                            }
                          }}
                        />
                      </Collapse>
                    </Box>

                    <IconButton
                      color="inherit"
                      onClick={() => {
                        // Toggle based on screen size could be handled better, but separate handlers work fine
                        if (window.innerWidth < 960) toggleMobileSearch();
                        else toggleSearch();
                      }}
                    >
                      {(searchOpen || mobileSearchOpen) ? <CloseIcon /> : <SearchIcon />}
                    </IconButton>

                    {/* Search Results Dropdown */}
                    {((searchOpen || mobileSearchOpen) && searchQuery) && (
                      <Paper
                        sx={{
                          position: 'absolute',
                          top: '100%',
                          right: 0,
                          mt: 1,
                          width: { xs: '250px', md: '300px' },
                          bgcolor: 'background.paper',
                          color: 'text.primary',
                          zIndex: 1300,
                          borderRadius: '12px',
                          boxShadow: theme.shadows[4],
                          maxHeight: '300px',
                          overflowY: 'auto'
                        }}
                      >
                        <List>
                          {filteredItems.slice(0, 5).map((item, index) => (
                            <ListItem
                              button
                              key={index}
                              onClick={() => handleSearchSelect(item.id)}
                              sx={{
                                '&:hover': { bgcolor: theme.palette.action.hover }
                              }}
                            >
                              <ListItemText
                                primary={item.label}
                                secondary={item.type}
                                primaryTypographyProps={{ fontSize: '0.9rem' }}
                                secondaryTypographyProps={{ color: 'text.secondary', fontSize: '0.75rem' }}
                              />
                            </ListItem>
                          ))}
                          {filteredItems.length === 0 && (
                            <ListItem>
                              <ListItemText primary="No results found" primaryTypographyProps={{ color: 'text.secondary', fontSize: '0.9rem' }} />
                            </ListItem>
                          )}
                        </List>
                      </Paper>
                    )}
                  </Box>
                </ClickAwayListener>

                {/* Theme Toggle Button */}
                <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                {/* Resume Button */}
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleDownload}
                  sx={{
                    borderRadius: '20px',
                    px: { xs: 2, md: 3 },
                    minWidth: { xs: 'auto', md: '64px' },
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                >
                  <Box component="span" sx={{ display: { xs: 'none', md: 'block' } }}>Resume</Box>
                  <DownloadIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                </Button>
              </Box>

            </Toolbar>
          </Container>
        </AppBar>

        {/* Mobile Drawer */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } // Styles handled by theme
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        {/* Components Rendering */}
        <About />
        <Experience />
        <Education />
        <Projects />
        <TechStack />
        <Skills />

      </Box>
    </ThemeProvider>
  );
}

export default App;
