import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme
  } from '@mui/material';
  
  // import AnimationIcon from '@mui/icons-material/Animation';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import DrawerComp from './DrawerComp';

function Header() {

  let navigate=useNavigate();
  // const [usr,setUsr]=useState("K");
  // let m=localStorage.getItem("user-name");?
  // console.log(m);
  const theme = useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function logout(){
    localStorage.clear();
    setAnchorEl(null);
    navigate("/login")
  }


    var c=localStorage.getItem("user-name");
  
  function profile(){
    setAnchorEl(null);
    navigate("/user")
  }
  
  
  return (
    <>
    <AppBar position='static' sx={{background:"#063970"}}>
      <Toolbar>
        <Typography variant='h6'> <b>BOOK STORE</b></Typography>
       
       { isMatch?<DrawerComp/> :   <>  { localStorage.getItem("user-login")?<Tabs textColor="white" sx={{marginLeft:1}}>
          <Tab label="Home" onClick={()=>navigate("/")}></Tab>
          <Tab label="My Books" onClick={()=>navigate("/mybooks")}></Tab>
          <Tab label="Search" onClick={()=>navigate("/search")}></Tab>
          </Tabs>    
          :
          <Tabs textColor="white" sx={{marginLeft:1}}>
          <Tab label="Home" onClick={()=>navigate("/")}></Tab>
          </Tabs>    
          }

         { localStorage.getItem("user-login") ? <><Avatar 
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{marginLeft:"auto"}}>
            {c[0]}
            </Avatar>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >
        <MenuItem onClick={profile}>Profile</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
      </>: 
      <>
      <Button variant='contained' onClick={()=>navigate('/login')} sx={{marginLeft:"auto"}}>Login</Button>
        <Button variant='contained' onClick={()=>navigate('/register')} sx={{marginLeft:2}}>SignUp</Button>
        </>
       }
       </>
       }
      
      </Toolbar>
      
    </AppBar>
    </>
  )
}

export default Header
