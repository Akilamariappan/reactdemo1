/*//import Card from './Card' 
import './App.css'
import {useState,useEffect} from 'react'
//import axios from 'axios'
const Cards=(props)=>{
    const[name,setName]=useState('react')
   console.log("props",props)
   const updateName=(value)=>{
    setName(value)
}
   useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://hn.algolia.com/api/v1/search?query=${name}',
      );  
      setData(result.data);
    };
    fetchData();
  }, []);
   
    return (
        <>
        <h1><marquee>
        welcome
        To
        Card</marquee>{props.name}{name}
        <button onClick={()=>setName('mca')
        }>name set
        </button>
        <button onClick={()=>updateName('akila')
        }>name update
        </button>
        </h1>
        </>
    )
}
export default Cards*/
import axios from "axios"
 import{useState} from "react"
 const Card=(props)=>{
    const[name,setName]=useState([])
    const GetData=async()=>{
        const data=await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('data',data.data)
        setName(data.data)

    }
    return(
        <>
        <button onClick={()=>GetData()}>Get Data</button>
        {/*<p>{JSON.stringify(name)}</p>*/}
        {
            name.map((value)=>{return<p>{value.title}</p>})
        }
        <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        </>
    )
 }
 export default Card