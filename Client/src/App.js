import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Protected from './Components/Protected'
import Dashboard from './Components/Dashboard';
import {Routes, Route } from "react-router-dom";
import User from './Components/User';
import Books from './Components/Books'
import Grid from '@mui/material/Grid';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useMediaQuery,useTheme } from '@mui/material'
import Search from './Components/Search'
import Mybooks from './Components/Mybooks';
function App() {
   const [userId,setUserId]=useState();
const [data,setData]=useState([]);
var z;
async function getData(){
  var x=await axios.get('https://www.googleapis.com/books/v1/volumes?q=Kunal');
  var y=await  x.data;
  // console.log(y.items);
  z=y.items;
  setData(y.items);
  // console.log(data.JSON());
  
}


useEffect( ()=>{
  getData();
        },[])
  const theme = useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  var x;
  if(isMatch)x=12;
  else x=3;
  return (
    <>
    <Header/>

    <Routes>
      <Route path='/login' element={<Protected cmp={Login}/>}></Route>
      <Route path='/' element={<Protected cmp={Dashboard}/>}></Route>
      <Route path='/dash' element={<Protected cmp={Dashboard}/>}></Route>
      <Route path='/register' element={<Protected cmp={Signup}/>}></Route>
      <Route path='/user' element={<Protected cmp={User}/>}></Route>
      <Route path='/search' element={<Protected cmp={Search}/>}></Route>
      <Route path='/mybooks'element={<Protected cmp={Mybooks}/>}></Route>
    </Routes>
    </>
  );
}

export default App;
