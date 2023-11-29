import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ChurchLogo from '../assets/ChurchLogo';
import ThemeSwitch from './ThemeSwitch';
import { useNavigate, Outlet } from "react-router-dom";


const pages = ['Home', 'Events', 'Ministries', 'Donate', 'About'];

const NavBar = (props) => {

  const {setTheme, theme} = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl)

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorEl(null);
    
    if (event.target.innerText) {
      navigate(event.target.innerText.toLowerCase());
    }

  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">

          <Toolbar disableGutters style={{justifyContent: 'space-between'}}>

            {/* Menu options for small screens */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="page options"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Menu optoins for bigger screens */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{flexGrow: 0,}}>
                <ChurchLogo width={250} theme={theme}/>
              </Box>

            <ThemeSwitch setTheme={setTheme}/>

          </Toolbar>

        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}
export default NavBar;