import axios from "axios";
import React from "react";
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";
import {env} from './Config'


function AddStudent() {
  
  let navigate=useNavigate()
    let formik=useFormik({
        initialValues:{
            name:"",
            rollno:"",
            age:"",
            teacher:""
        },
        validate:(values)=>{
           let errors={}
           if(values.name===""){
            errors.name="Please enter your name"
           }
           if(values.rollno===""){
            errors.rollno="Please enter roll No."
           }
           if(values.age===""){
            errors.age="Please mention age"
           }
           if(values.teacher===""){
            errors.teacher="Please select a teacher"
           }
           return errors;
        },
        onSubmit:async(values)=>{
            try {
               let addStudent= await axios.post(`${env.api}/createstudent`,values)
                if(addStudent.status===200){
                  alert(addStudent.data.message)
                  navigate("/")
                }                
            } catch (error) {
                alert(error.response.data.message)
            }
        }
    })
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6 mb-lg-4">
            <label>Name</label>
            <input className="form-control" type="text" 
            name="name" 
            onChange={formik.handleChange}
            value={formik.values.name}/>
            <span style={{color:"red"}}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6  mb-lg-4">
            <label>Roll No</label>
            <input className="form-control" type="text"
            name="rollno"
            onChange={formik.handleChange}
            value={formik.values.rollno}/>
            <span style={{color:"red"}}>{formik.errors.rollno}</span>
            </div>
            <div className="col-lg-6">
            <label>Age</label>
            <input className="form-control" type="number"
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}/>
            <span style={{color:"red"}}>{formik.errors.age}</span>
            </div>
            <div className="col-lg-6">
            <label>Teacher</label>
            <br/>
            <select className="form-control"
            name="teacher"
            onChange={formik.handleChange}
            value={formik.values.teacher}>
              <option value="teacher1" selected>teacher1</option>
              <option value="teacher2">teacher2</option>
            </select>
            <span style={{color:"red"}}>{formik.errors.teacher}</span>
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
