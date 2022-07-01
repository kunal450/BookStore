import React,{useEffect, useState} from 'react'
import {Radio,Grid, Paper, Avatar, Typography, TextField, Button,
FormControl, 
FormLabel,
Checkbox ,
RadioGroup,
FormControlLabel,
} from '@mui/material';
import axios from 'axios';


function User() {
    const [data,setData]=useState({});
   
    // this is used to get the complete data to check during login  
    async function getData(){
      var x=await axios.get('/user');
      var y=x.data;
      var id=localStorage.getItem("user-id");
      for(let i=0;i<y.length;i++){
        if(y[i]._id==id){
            setData(y[i]);
        }
      }
    }
  useEffect( ()=>{
    getData();
  },[])
    
    
    return (
        <>
        <div>
        <h2 style={{textAlign:"center"}}>User Details</h2>
        <table style={{width:50, margin:"auto", background:"#063970" , color:"white"}}>
            <tr style={{margin:"20px"}}>
                <td><label htmlFor="name">Name</label></td>
                <td>{data.Name}</td>
            </tr>
            <tr>
                <td><label htmlFor="name">Email</label></td>
                <td>{data.Email}</td>
            </tr>
            <tr>
                <td><label htmlFor="name">Gender</label></td>
                <td>{data.Gender}</td>
            </tr>
            <tr>
                <td><label htmlFor="name">Password</label></td>
                <td>{data.Password}</td>
            </tr>
            <tr>
                <td><label htmlFor="name">Phone</label></td>
                <td>{data.Phone}</td>
            </tr>
        </table>
        </div>
        </>
    )

}

export default User