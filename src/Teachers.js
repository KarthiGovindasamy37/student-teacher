import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { env } from './Config'

function Teachers() {
  
    let[teachers,setTeachers]=useState([])
    let[loading,setLoading]=useState(true)

    useEffect(()=>{
     loadTeachers()
    },[])

    const loadTeachers=async()=>{
        try {
            let teachersData=await axios.get(`${env.api}/teachers`)
             setTeachers(teachersData.data)
             setLoading(false)
        } catch (error) {
            alert(error.response.data.message)
        }
    }


let deleteTeacher=async(e)=>{
    try {
        let ask=window.confirm("Flagged to deletion")
        if(ask){
        await axios.delete(`${env.api}/teacher/${e._id}`)
        let remain = teachers.filter(ele=>ele._id !== e._id)
        setTeachers(remain)
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
    <h1 className="text-secondary ">Teachers List</h1>
    <Link to="/add-teacher" className='ms-4' > <button className=" btn  btn-info mt-2 ms-5">Add Teacher</button></Link>
</div>


            <div className="table-responsive ms-2">
                <table className="table table-bordered"  width="100%" >
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Emp No</th>
                            <th>Age</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                           teachers.map((e,i)=>{
                                return <tr>
                               <td>{i+1}</td> 
                               <td>{e.name}</td>
                               <td>{e.emp_no}</td>
                               <td>{e.age}</td>
                               <td>
                                <Link to={`/view-teacher/${e._id}`} className='btn btn-success px-4 me-3'>View</Link>
                                <Link to={`/edit-teacher/${e._id}`} className='btn btn-warning px-4 me-3'>Edit</Link>
                                <button onClick={()=>{deleteTeacher(e)}} className='btn btn-danger'>Delete</button>
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

export default Teachers