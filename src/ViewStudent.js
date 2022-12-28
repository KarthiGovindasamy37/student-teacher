import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {env} from './Config'

function ViewStudent() {
    let params=useParams()
    let[data,setdata]=useState({})
    let[loading,setloading]=useState(true)
    
    useEffect(()=>{
      loadStudent();
    },[])

    let loadStudent=async()=>{
        try {
            let student= await axios.get(`${env.api}/student/${params.id}`)
            setdata(student.data)
            setloading(false)
        } catch (error) {
            alert(error.response.data.message)
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
        <h1>{`Mentor : ${data.teacher}`}</h1>
        
    </div>
}
    </div>
  )
}

export default ViewStudent