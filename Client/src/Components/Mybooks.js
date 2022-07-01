import axios from 'axios';
import React,{useState,useEffect} from 'react'
import '../App.css'
import { useMediaQuery,useTheme,Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import Books from './Books';
function Mybooks() {

    const [dat1,setDat1]=useState([]);
    
    async function getData(){
        var usrId=localStorage.getItem("user-id");
        // console.log(usrId);
        var url= "/user/"+usrId;
        var y=await axios.get(url)
        setDat1(y.data.Books); 
        console.log(dat1)
    }
    const theme = useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
    var x;
    if(isMatch)x=12;
    else x=3;
    useEffect(()=>{
        getData();
    },[])

  return (
    <>
    <div className="myBooks">
     <h2 style={{textAlign:"center"}}><strong>MY BOOKS</strong></h2>
    </div>
    <Grid container spacing={4}>
  
      { dat1.map((i)=>{
    let img1=i.imageLink;
    let ttl=i.title;
    let desc=i.intro;
    let elink=i.ebook;
    let buy=i.purchase;
    let athr=i.author;
    return(
      <><Grid item xs={x}>
      <Books title={ttl} description={desc} elink={elink} purchase={buy} author={athr} image={img1} />
      </Grid>
      {/* {i.volumeInfo.imageLinks.thumbnail} */}
      </>
    )
  })
    
}
    </Grid>
    </>
  )
}

export default Mybooks