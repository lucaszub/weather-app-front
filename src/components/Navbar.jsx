import { AppBar, Box, Button, ThemeProvider, Toolbar, Typography, createTheme, styled } from "@mui/material";
import React from "react";
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import { InputBase } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#FFFFFF',
      main: '#3f50b5',
      dark: '#262626',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
  
    <ThemeProvider theme={theme}>
      <AppBar  position="sticky" sx={{ backgroundColor: theme.palette.primary.light }}>
        <StyledToolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{color: theme.palette.primary.dark}} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.primary.dark }}>
            App météo 
          </Typography>
          <Button sx={{color: theme.palette.primary.dark}}>Sign in</Button>
          <Button sx={{color: theme.palette.primary.dark}}>Sign up</Button>
        </StyledToolbar>
      </AppBar>
    </ThemeProvider>
  
  );
}

export default Navbar;