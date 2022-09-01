import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import context from './Context';


function EditStudent() {
     
     let context1=useContext(context)
     let params=useParams() 
     let navigate=useNavigate() 
    let formik=useFormik({
     initialValues:{
        name:"",
        rollno:"",
        age:"",
        teacher:""
     },
     validate:(values)=>{
        let a={};
        if(values.name===""){
            a.name="Please enter student name"
        }
        if(values.teacher===""){
            a.teacher="Please assign a teacher"
        }
        if(values.rollno===""){
          a.teacher="Please enter Roll No."
      }

        return a;
     },
     onSubmit:async(values)=>{
        try {
           await axios.put(`https://62ff703934344b6431f96fea.mockapi.io/students/${params.id}`,values)
           alert("User details updated")
           navigate("/portal/students")
           context1.setmdata([...context1.mdata],1)
        } catch (error) {
            
        }
     }

    })

    useEffect(()=>{
      getdata();
    },[])
    
    let getdata=async()=>{
        try {
            let student=await axios.get(`https://62ff703934344b6431f96fea.mockapi.io/students/${params.id}`)
            formik.setValues({
                name:student.data.name,
                rollno:student.data.rollno,
                age:student.data.age,
                teacher:student.data.teacher
            })
        } catch (error) {
            
        }
    }
  return (
    <div>  <div className="container">
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
            <option>teacher1</option>
            <option>teacher2</option>
          </select>
          <span>{formik.errors.teacher}</span>
          </div>
          <div className="d-flex justify-content-center mt-4">
              <button disabled={!formik.isValid} className="btn btn-warning" type="submit">Update</button>
          </div>

      </div>
    </form>
  </div></div>
  )
}

export default EditStudent