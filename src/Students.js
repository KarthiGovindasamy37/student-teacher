import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { env } from './Config';


function Students() {

    let[students,setStudents]=useState([])
    let[loading,setLoading]=useState(true)

    useEffect(()=>{
     loadStudents()
    },[])

    const loadStudents=async()=>{
        try {
            setLoading(true)
            let studentsData=await axios.get(`${env.api}/students`)
             setStudents(studentsData.data)
             setLoading(false)
        } catch (error) {
            alert(error.response.data.message)
        }
    }


let deleteStudent=async(e)=>{
    try {
        let ask=window.confirm("Flagged to deletion")
        if(ask){
        await axios.delete(`${env.api}/student/${e._id}`)
        let remain = students.filter(ele=>ele._id !== e._id)
        setStudents(remain)
        }
        
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
        <div className="d-flex mb-4">
    <h1 className="text-secondary ">Students List</h1>
    <Link to="/add-student" className='ms-4' > <button className=" btn  btn-primary mt-2 ms-5">Add Student</button></Link>
</div>


            <div className="table-responsive ms-2">
                <table className="table table-bordered"  width="100%" >
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Roll No</th>
                            <th>Age</th>
                            <th>Tutor</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                           students.map((e,i)=>{
                                return <tr>
                               <td>{i+1}</td> 
                               <td>{e.name}</td>
                               <td>{e.rollno}</td>
                               <td>{e.age}</td>
                               <td>{e.teacher}</td>
                               <td>
                                <Link to={`/view-student/${e._id}`} className='btn btn-success px-4 me-3'>View</Link>
                                <Link to={`/edit-student/${e._id}`} className='btn btn-warning px-4 me-3'>Edit</Link>
                                <button onClick={()=>{deleteStudent(e)}} className='btn btn-danger'>Delete</button>
                               </td>


                                </tr>
                            })
                        }
                    </tbody>
                        </table>
                        </div>
                 </div>
           
}
        </div>
  )
}

export default Students