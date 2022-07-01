import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Protected(props) {
    const Cmp=props.cmp;
    let navigate =useNavigate();
 useEffect(()=>{
     if(!localStorage.getItem('user-login')){
       navigate("/login");
     }
 },[])
  return (
   <>
   <Cmp/>
   </>
  )
}

export default Protected