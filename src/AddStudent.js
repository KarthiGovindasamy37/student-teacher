import axios from "axios";
import React, { useContext, useState } from "react";
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";
import context from "./Context";

function AddStudent() {
  let context1=useContext(context)
  let navigate=useNavigate()
    let formik=useFormik({
        initialValues:{
            name:"",
            rollno:"",
            age:"",
            teacher:""
        },
        validate:(values)=>{
           let a={}
           if(values.name===""){
            a.name="Please enter your name"
           }
           if(values.rollno===""){
            a.rollno="Please enter Roll No."
           }
           if(values.teacher===""){
            a.teacher="Please select a teacher"
           }
           return a;
        },
        onSubmit:async(values)=>{
            try {
                await axios.post("https://62ff703934344b6431f96fea.mockapi.io/students",values)
                context1.setmdata([...context1.mdata],1)
                alert("Student Created")
                navigate("/portal/students")
                
            } catch (error) {
                
            }
        }
    })
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input className="form-control" type="text" 
            name="name" 
            onChange={formik.handleChange}
            value={formik.values.name}/>
            <span>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
            <label>Roll No</label>
            <input className="form-control" type="text"
            name="rollno"
            onChange={formik.handleChange}
            value={formik.values.rollno}/>
            <span>{formik.errors.rollno}</span>
            </div>
            <div className="col-lg-6">
            <label>Age</label>
            <input className="form-control" type="number"
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}/>
            </div>
            <div className="col-lg-6">
            <label>Teacher</label>
            <br/>
            <select className="form-control"
            name="teacher"
            onChange={formik.handleChange}
            value={formik.values.teacher}>
              <option value="teacher1">teacher1</option>
              <option value="teacher2" selected>teacher2</option>
            </select>
            <span>{formik.errors.teacher}</span>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button disabled={!formik.isValid} className="btn btn-warning" type="submit">Add Student</button>
            </div>

        </div>
      </form>
    </div>
  );
}

export default AddStudent;
