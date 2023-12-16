import React, { Component, useState } from 'react'

export default function StateHoldObject(){
  const[college,setCollege]=useState({cid:1,cname:"SKCT",year:2023})
  
  const changeDemo=()=>
  {
    setCollege((prevState)=>{return{...prevState,year:2024}})
  }
    return (
      <div>
      <h1>COLLEGE ID IS {college.cid}</h1>  
      <h1>COLLEGE NAME IS {college.cname}</h1>
      <h1>YEAR {college.year}</h1>
      <button onClick={changeDemo}>changeYear</button>
      </div>
    )
  }

