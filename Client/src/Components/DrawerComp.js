import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {
  Drawer,
  IconButton,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const pages = [{name:"User Info",link:"/user"},{name:"Home", link:"/"}, {name:"Search Books",link:"/search"}, {name:"My Books", link:"/mybooks"}];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate=useNavigate();
  function logout(){
    localStorage.clear();
    navigate("/login")
  }
  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        
      >

      {
        localStorage.getItem('user-login')?<>
       <List sx={{background:"#063970" ,height:1200}}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText sx={{color:"white"}} onClick={()=>{navigate(page.link)}} >{page.name}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))
          }
          <ListItemButton>
              <ListItemIcon>
                <ListItemText sx={{color:"white"}} onClick={logout} >Log out</ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
        </>
        :
        <>
        <List sx={{background:"#063970" ,height:1200}}>
          <ListItemButton>
              <ListItemIcon>
                <ListItemText sx={{color:"white"}} onClick={()=>{ navigate('/')}} >Home</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText sx={{color:"white"}} onClick={()=>{ navigate('/register')}} >Sign Up</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText sx={{color:"white"}} onClick={()=>{ navigate('/login')}} >Log In</ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
        </>
      }
      </Drawer>
      <Button
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)} >
        <MenuIcon color="white" />
      </Button>
    </>
  );
};

export default DrawerComp;