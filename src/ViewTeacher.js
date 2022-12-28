import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {env} from './Config'

function ViewTeacher() {
    let params=useParams()
    let[teacher,setTeacher]=useState({})
    let[students,setStudents]=useState([])
    let[loading,setloading]=useState(true)
    
    useEffect(()=>{
      loadTeacher();
    },[])

    let loadTeacher=async()=>{
        try {
            let teacherDetail= await axios.get(`${env.api}/teacher/${params.id}`)
            setTeacher(teacherDetail.data.teacher)
            setStudents(teacherDetail.data.students)
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
        <h1>{`Name : ${teacher.name}`}</h1>
        <h1>{`Age : ${teacher.age}`}</h1>
        <h1>{`Employee No : ${teacher.emp_no}`}</h1>
        <h1>{`Teacher id : ${teacher.teacher_id}`}</h1>
            
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary text-center">Students List</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Roll No</th>                     
                            
                        </tr>
                    </thead>
                    
                    <tbody>
                    {
                            students.map((e,i)=>{
                                return <tr>
                               <td>{i+1}</td> 
                               <td>{e.name}</td>
                               <td>{e.rollno}</td>
                            </tr>
                            })
                        }
                    </tbody>
                        </table>
                        </div>
                 </div>
            </div>
            </div>  
}
    </div>
    
    
  )
}

export default ViewTeacher