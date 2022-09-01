import React, { useContext } from 'react'
import context from './Context'

function Teacher2() {
    let context1=useContext(context)
  return (
    <div>
        <h1>Name : Shalini</h1>
        <h1>User Name : teacher2</h1>
        <h1>Emp.No : 10s13</h1>
        
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
                            <th>Age</th>
                            
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Roll No</th>
                            <th>Age</th>
                        
                        </tr>
                    </tfoot>
                    <tbody>
                    {
                            context1.t2data.map((e,i)=>{
                                return <tr>
                               <td>{i+1}</td> 
                               <td>{e.name}</td>
                               <td>{e.rollno}</td>
                               <td>{e.age}</td>
                            </tr>
                            })
                        }
                    </tbody>
                        </table>
                        </div>
                 </div>
            </div>
    </div>
  )
}

export default Teacher2