import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewStudent() {
    let params=useParams()
    let[data,setdata]=useState({})
    let[loading,setloading]=useState(false)
    
    useEffect(()=>{
      loadStudent();
    },[])

    let loadStudent=async()=>{
        try {
            setloading(true)
            let student= await axios.get(`https://62ff703934344b6431f96fea.mockapi.io/students/${params.id}`)
            setdata(student.data)
            setloading(false)
        } catch (error) {
            
        }
    }
  return (
    <div>
      {
    loading ? <div style={{height:"400px"}} className="d-flex justify-content-center align-items-center">
    <div className="spinner-border text-success" role="status"></div>
      
    </div> :
    <div>
        <h1>{`Name : ${data.name}`}</h1>
        <h1>{`Roll No : ${data.rollno}`}</h1>
        <h1>{`Age : ${data.age}`}</h1>
        <h1>{`Tutor : ${data.teacher}`}</h1>
        
    </div>
}
    </div>
  )
}

export default ViewStudent