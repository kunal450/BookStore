import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Radio,Grid, Paper, Avatar, Typography, TextField, Button,
FormControl, 
FormLabel,
Checkbox ,
RadioGroup,
FormControlLabel,
} from '@mui/material';

const Signup = () => {
    let navigate=useNavigate();

    // here i am creating this to post data to our database 
    
    async function signup(){
       const x=await axios.post('/user', data)
       console.log(data);
       navigate('/login')
          
      };
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const [data,setData]=useState({Name:'',Email:'',Gender:'',Password:'',Phone:''});
    
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        S
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField 
                    fullWidth label='Name'
                    // error={data.name==""}
                    // helperText={data.name == "" ? 'Empty field!' : ' '}
                    onChange={(e)=>{setData({...data, Name: e.target.value})}}
                    required placeholder="Enter your name" />
                    <br /> <br />
                    <TextField 
                    fullWidth label='Email'  
                    onChange={(e)=>{setData({...data, Email: e.target.value})}} 
                    required placeholder="Enter your email" />
                    <br /> <br />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup 
                        aria-label="gender" 
                        onChange={(e)=>{setData({...data, Gender: e.target.value})}} 
                        required 
                        name="gender"
                        style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField 
                    fullWidth 
                    label='Phone Number' 
                    onChange={(e)=>{setData({...data, Phone: e.target.value})}} 
                    required 
                    placeholder="Enter your phone number" />
                    <br /> <br />
                    <TextField 
                    fullWidth 
                    label='Password' 
                    onChange={(e)=>{setData({...data, Password: e.target.value})}} 
                    required 
                    placeholder="Enter your password"/>
                    <br /> <br />
                    <TextField 
                    fullWidth 
                    label='Confirm Password' 
                    
                    required placeholder="Confirm your password"/>
                    <Button 
                    style={{marginTop:6}} 
                    variant='contained' 
                    fullWidth
                    onClick={signup} 
                    color='primary'>
                    Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;