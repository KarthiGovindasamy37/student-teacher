import axios from "axios";
import React, { useEffect } from "react";
import { useFormik } from 'formik'
import { useNavigate, useParams } from "react-router-dom";
import {env} from './Config'


function EditTeacher() {

    let params=useParams()

    useEffect(()=>{
        loadTeacher()
    },[])

    let loadTeacher=async()=>{
        try {
            let teacher=await axios.get(`${env.api}/editteacher/${params.id}`)
            formik.setValues({
                name:teacher.data.name,
                age:teacher.data.age,
                emp_no:teacher.data.emp_no,
                teacher_id:teacher.data.teacher_id
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
  
  let navigate=useNavigate()
    let formik=useFormik({
        initialValues:{
            name:"",
            emp_no:"",
            age:"",
            teacher_id:""
        },
        validate:(values)=>{
           let errors={}
           if(values.name===""){
            errors.name="Please enter name"
           }
           if(values.emp_no===""){
            errors.rollno="Please enter employee no."
           }
           if(values.age===""){
            errors.age="Please mention age"
           }
           if(values.teacher_id===""){
            errors.teacher="Please mention teacher id"
           }
           return errors;
        },
        onSubmit:async(values)=>{
            try {
               let updateTeacher= await axios.put(`${env.api}/teacher/${params.id}`,values)
                if(updateTeacher.status===200){
                  alert(updateTeacher.data.message)
                  navigate("/teachers")
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
            <label>Employee No</label>
            <input className="form-control" type="text"
            name="emp_no"
            onChange={formik.handleChange}
            value={formik.values.emp_no}/>
            <span style={{color:"red"}}>{formik.errors.emp_no}</span>
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
            <label>Teacher id</label>
            <br/>
            <input className="form-control" type="text"
            name="teacher_id"
            onChange={formik.handleChange}
            value={formik.values.teacher_id}/>              
            <span style={{color:"red"}}>{formik.errors.teacher_id}</span>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button disabled={!formik.isValid} className="btn btn-warning" type="submit">Update</button>
            </div>

        </div>
      </form>
    </div>
  );
}

export default EditTeacher
