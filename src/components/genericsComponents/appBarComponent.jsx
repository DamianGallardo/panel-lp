'use client';
import React, { useState, useEffect, useMemo } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Container, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@nextui-org/link";
import { usePathname } from 'next/navigation';

export default function AppBarComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); 

  // Calcula el color de fondo solo cuando cambian `pathname` o `scrolled`
  const backgroundColorState = useMemo(() => {
    if (pathname === '/') {
      return scrolled ? '#0055B8' : 'transparent';
    }
    return '#0055B8 ';
  }, [pathname, scrolled]);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleScroll = () => setScrolled(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { text: 'Inicio', href: '/' },
    { text: 'Nosotros', href: '/about' },
    { text: 'Contacto', href: '/contact' },
    { text: 'Blog', href: '/blog' },
    { text: 'Proyectos', href: '/proyects' },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: backgroundColorState,
          transition: 'background-color 0.3s ease', // Transición suave
          height: '60px',
          paddingTop: '10px',  
          justifyContent: 'center',
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box display="flex" justifyContent={{md:'space-around' ,xs:'space-aroud'}} alignItems="center" width="100%" height={'100%'} >
              <Box display="flex" alignItems="center" paddingRight={'10px'}>
                <Link href="/">
                 <img src="" width={160} height={160} alt="Logo" />
                </Link>
              </Box>
              <Box display={{ xs: 'none', md: 'flex' }} alignItems="center">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <Typography
                        sx={{
                            ml: 3,
                            color: 'white',
                            fontSize: '18px', // Tamaño de la fuente
                            letterSpacing: '0.15em', // Espaciado entre letras
                        }}
                        >
                      {item.text}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box display={{ xs: 'flex', md: 'none' }}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        transitionDuration={{ enter: 1000, exit: 1000 }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'black',
            color: 'white',
            width: '100%',
            height: '100%',
            transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)', 
          },
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
          <IconButton edge="end" color="inherit" aria-label="close" onClick={handleDrawerToggle} sx={{ position: 'absolute', top: 16, right: 16 }}>
            <CloseIcon />
          </IconButton>
          <List sx={{ textAlign: 'center' }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} onClick={handleDrawerToggle}>
                <ListItemText>
                  <Link href={item.href} sx={{ color: 'white' }}>
                    <Typography color="white">
                      {item.text}
                    </Typography>
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
