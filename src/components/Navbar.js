import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { ColorModeContext, tokens } from "../theme";
import { styled, useTheme, List, ListItemButton, AppBar, Box, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Avatar } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MobileNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={ { display: 'flex' }}>
      <AppBar position='fixed' open={open}>
        <Box
          display='flex'
          justifyContent='space-between'
          p={2}
        >
          <Box
            display="flex"
            alignItems='center'
          >
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h5' noWrap component='div'>
              Portafolio
            </Typography>
          </Box>
          
          <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton>
          </Box>
        </Box>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Perfil', 'Proyectos', 'Contacto'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <HomeIcon/> : ''}
                  {index === 1 ? <AccountCircleIcon/> : ''}
                  {index === 2 ? <InventoryIcon/> : ''}
                  {index === 3 ? <ContactPageIcon/> : ''}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

const DesktopNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box 
      display="flex" 
      width="100%" position="fixed"
      backgroundColor={theme.palette.mode === 'dark' ? (
        colors.primary[50]
      ) : (
        colors.darkAccent[900]
      )}
      p={1.6}
      zIndex='100'
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant='h5'
            fontWeight={600}
            marginLeft={6}
            color={theme.palette.mode === 'dark' ? (
              colors.blueAccent[600]
            ) : (
              colors.primary[50]
            )}
          >
            Portafolio
          </Typography>
        </Box>
        <Box 
          display='flex'
          alignItems='center'
          gap='1.6rem'
        >
          {['Home', 'Perfil', 'Proyectos', 'Contacto'].map((text, index) => (
            <Typography
              fontWeight={600}
              color={theme.palette.mode === 'dark' ? (
                colors.blueAccent[600]
              ) : (
                colors.primary[50]
              )}
            >
              {text}
            </Typography>
          ))}
          <Box 
            display="flex"
            mr={6}
          >
            <IconButton onClick={colorMode.toggleColorMode}>
              <Avatar
                sx={{ width:32, height:32, bgcolor: colors.blueAccent[600] }}
              >
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon style={{ color: colors.primary[50] }}/>
                  ) : (
                    <LightModeOutlinedIcon style={{ color: colors.primary[50] }}/>
                )}
              </Avatar>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />
}

export default Navbar;