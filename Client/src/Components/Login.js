import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { sizing } from '@mui/system';
import {Radio,Grid, Paper, Avatar, Typography, Button,
  FormControl, 
   FormLabel,
   Link,
   Checkbox ,
  RadioGroup,
  TextField,
  Input,
  Box,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControlLabel,
  } from '@mui/material';
import axios from 'axios';
function Login() {
    const navigate=useNavigate();
    const [data,setData]=useState([]);
   
    // this is used to get the complete data to check during login  
    async function getData(){
      var x=await axios.get('/user');
      setData(x.data);
    }
  useEffect( ()=>{
    getData();
  },[])

  // this is the style of our login in which we used paper of MUI 

const paperStyle={padding :20,width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}


    // ths is used to check user authenticity on every submit 

  function submit(){
    let flag=false; 
    for(let i=0;i<data.length;i++){
        if(user==data[i].Email&&pass==data[i].Password){flag=true;
          localStorage.setItem("user-id",data[i]._id);
          localStorage.setItem("user-name",data[i].Name);
          break;
        }
      }
    console.log(data);
    if(flag){localStorage.setItem("user-login",true);
    navigate('/dash');
    }
    else alert("try again");
  };

  const [user, setUser] =useState("");
  const [pass, setPass] =useState("");
  return (
    <>
    <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}>L</Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField 
                label='Username' 
                placeholder='Enter username' 
                onChange={(e)=>{setUser(e.target.value)}} 
                fullWidth 
                required/>
                <br /> <br />
                <TextField 
                label='Password' 
                placeholder='Enter password' 
                onChange={(e)=>{setPass(e.target.value)}} 
                type='password' 
                fullWidth 
                required/>
                <Button 
                onClick={submit} 
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth>
                Login</Button>
                <Typography > Create new account : 
                     <Link onClick={()=>navigate("/register")} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    </>
  )
}

export default Login



