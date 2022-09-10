import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import context from './Context';


function Students() {


let context1=useContext(context)
let deleteStudent=async(e)=>{
    try {
        let ask=window.confirm("flagged to deletion")
        if(ask){
        await axios.delete(`https://62ff703934344b6431f96fea.mockapi.io/students/${e.id}`)
        let i=context1.sdata.findIndex((ele)=>ele.id===e.id)
        context1.sdata.splice(i,1);
        context1.setsdata([...context1.sdata])
        }
        
    } catch (error) {
        
    }
}
    
  return (
    <div>
        {
            context1.loading ? <div style={{height:"400px"}} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-success" role="status"></div>
              
            </div> :
    <div> 
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Students</h1>
    <Link to="/portal/add-student" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Add Student</Link>
</div>

<div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                    <tfoot>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Roll No</th>
                            <th>Age</th>
                            <th>Tutor</th>
                            <th>Actions</th>
                        
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                           context1.sdata.map((e,i)=>{
                                return <tr>
                               <td>{i+1}</td> 
                               <td>{e.name}</td>
                               <td>{e.rollno}</td>
                               <td>{e.age}</td>
                               <td>{e.teacher}</td>
                               <td>
                                <Link to={`/portal/view-student/${e.id}`} className='btn btn-success'>View</Link>
                                <Link to={`/portal/edit-student/${e.id}`} className='btn btn-warning ml-2'>Edit</Link>
                                <button onClick={()=>{deleteStudent(e)}} className='btn btn-danger ml-2'>Delete</button>
                               </td>


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

export default Students