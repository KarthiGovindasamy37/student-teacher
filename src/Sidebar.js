import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
        <div id="wrapper">

{/* <!-- Sidebar --> */}
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    {/* <!-- Sidebar - Brand --> */}
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Student-Teacher</div>
    </a>

    {/* <!-- Divider --> */}
    <hr class="sidebar-divider my-0"/>

    {/* <!-- Nav Item - Dashboard --> */}
    <li class="nav-item active">
        <Link class="nav-link" to="/portal/students">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Students</span></Link>
    </li>

    {/* <!-- Divider --> */}
    <hr class="sidebar-divider"/>
    <li class="nav-item active">
        <Link class="nav-link" to="/portal/teacher1">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Teacher-1</span></Link>
    </li>

    {/* <!-- Divider --> */}
    <hr class="sidebar-divider"/>
    <li class="nav-item active">
        <Link class="nav-link" to="/portal/teacher2">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Teacher-2</span></Link>
    </li>

    {/* <!-- Divider --> */}
    <hr class="sidebar-divider"/>
    </ul>
    </div>

    </div>
    
  )
}

export default Sidebar;