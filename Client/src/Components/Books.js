import React,{useState} from 'react'
import { Paper, Button} from '@mui/material'
import '../App.css'
import logo from '../logo.svg'
import axios from 'axios'
function Books(props) {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    async function addBook(){
      if(!localStorage.getItem("user-login")) { alert("first login your account");
      return }
      
        var obj={
            "title":props.title,
            "intro":props.description,
            "ebook":props.elink,
            "purchase":props.purchase,
            "author":props.author,
            "imageLink":props.image
        }
        var a=localStorage.getItem('user-id')
        var url='/addBooks/'+a;
       let m=await axios.patch(url,{
            title:props.title,
            intro:props.description,
            ebook:props.elink,
            purchase:props.purchase,
            author:props.author[0],
            imageLink:props.image
        });
        console.log(m);
        alert("The book has been added to your account");
    }

  return (
    <>
    <div className='bookCard'>
    <div className='bookImg'>
     <img src={props.image} alt={props.title}/>
    </div>
    <h4>{props.title}</h4>
    <div className='bookData'>
    {props.description}   
    </div>
    <div className="bookAuthor">
     <strong>{props.author}</strong>
    </div>
    <div className="bookLink">
    <ul>
        <li><a href={props.elink}>ebook link</a> </li>
        <li> <a href={props.purchase ? props.purchase:"#"}>Purchase link</a> </li>
    </ul>
    <Button variant='contained' fullWidth onClick={addBook} >Add</Button>
    </div>
    </div>
    </>
  )
}

export default Books