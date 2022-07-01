import React, { useEffect ,useState} from 'react'
import Search from './Search'
import axios from 'axios';
import { useMediaQuery,useTheme} from '@mui/material'
import Grid from '@mui/material/Grid';
import Books from './Books';
function Dashboard() {

  const [data,setData]=useState([]);
   
  async function getData(){
      var url ="https://www.googleapis.com/books/v1/volumes?q=Kunal";
     var p= await axios.get(url);
      var y=await  p.data;
      var z=await y.items
      // console.log(z);
      // console.log(y);
      setData(z);
      // console.log(data)
      
  }
  useEffect(()=>{
    getData();
  },[]);
  // console.log(data);
  const theme = useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  var x;
  if(isMatch)x=12;
  else x=3;

  return (
    <>
     <Grid container spacing={4}>
  
  { data.map((i)=>{
    let img1=i.volumeInfo.imageLinks&&i.volumeInfo.imageLinks.smallThumbnail;
    let ttl=i.volumeInfo.title;
    let desc=i.volumeInfo.subtitle;
    let elk=i.volumeInfo.previewLink;
    let buy=i.saleInfo.buyLink;
    let athr=i.volumeInfo.authors;
    return(
  <><Grid item xs={x}>
  <Books title={ttl} description={desc} elink={elk} purchase={buy} author={athr} image={img1} />
  </Grid>
  </>
)
})

}
</Grid>
    </>
  )
}

export default Dashboard