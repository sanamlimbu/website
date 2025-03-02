import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  TypographyProps,
  styled,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const matches = useMediaQuery('(max-width:900px)');

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,.09)',
        height: 'auto',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: '200',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.2em 4em 1.2em 3em',
          fontSize: '1.2rem',
          '@media (max-width: 480px)': {
            padding: '1.2em 2em 1.2em 1.8em',
          },
        }}
      >
        <NavItem fontSize={'24px!important'}>limbu.dev</NavItem>
        {matches ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              padding: '0',
              '&:hover': {
                color: '#137efb',
                background: 'none',
              },
            }}
          >
            <MenuOpenIcon fontSize="large" />
          </IconButton>
        ) : (
          <Box
            sx={{
              display: 'flex',
              gap: '1.2em',
              flexWrap: 'wrap',
              maxWidth: '100%',
              alignItems: 'center',
            }}
          >
            <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
              <NavItem>Home</NavItem>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              <NavItem>About</NavItem>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
              <NavItem>Projects</NavItem>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              <NavItem>Contact</NavItem>
            </ScrollLink>
          </Box>
        )}
      </Box>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
          }}
        >
          <IconButton
            sx={{
              position: 'fixed',
              right: 40,
              top: 25,
              background: 'none',
              padding: '0',
              '&:hover': {
                background: 'none',
                color: '#137efb',
              },
            }}
            onClick={() => setIsDrawerOpen(false)}
          >
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2em',
            }}
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleDrawer(false)}
            >
              <MobileNavItem>Home</MobileNavItem>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleDrawer(false)}
            >
              <MobileNavItem>About</MobileNavItem>
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleDrawer(false)}
            >
              <MobileNavItem>Projects</MobileNavItem>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleDrawer(false)}
            >
              <MobileNavItem>Contact</MobileNavItem>
            </ScrollLink>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

const NavItem = styled(Typography)<TypographyProps>(() => ({
  display: 'inline',
  fontWeight: 'bold',
  fontSize: '17px',
  cursor: 'pointer',
  '&:hover': {
    color: '#137efb',
  },
}));

const MobileNavItem = styled(Typography)<TypographyProps>(() => ({
  display: 'inline',
  cursor: 'pointer',
  '&:hover': {
    color: '#137efb',
  },
  fontSize: '24px',
  fontWeight: '500',
}));
