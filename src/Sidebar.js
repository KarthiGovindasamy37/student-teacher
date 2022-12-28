import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='pt-3 text-white'>
        <h3 className='text-center'>STUDENT-</h3>
        <h3 className='ps-4 ms-4'>TEACHER</h3>
    </div>
    <hr className='hr-tag'/>
    
    <Link to="/" className='link'><h5 className='ps-3'>Students</h5></Link>
    <hr className='hr-tag'/>
    <Link to="/teachers" className='link'><h5 className='ps-3'>Teachers</h5></Link>
    <hr className='hr-tag'/>
    
    </div>
    
     )
}

export default Sidebar;