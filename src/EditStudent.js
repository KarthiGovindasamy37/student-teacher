import React, {  useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { env } from './Config';



function EditStudent() {
     
     
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
        let errors={};
        if(values.name===""){
          errors.name="Please enter student name"
        }
        if(values.teacher===""){
          errors.teacher="Please assign a teacher"
        }
        if(values.age===""){
          errors.age="Please mention age"
        }
        if(values.rollno===""){
          errors.rollno="Please enter roll No."
      }

        return errors;
     },
     onSubmit:async(values)=>{
        try {
          let student = await axios.put(`${env.api}/student/${params.id}`,values)
           if(student.status===200){
            alert(student.data.message)
            navigate("/")
           }
        } catch (error) {
            alert(error.response.data.message)
        }
     }

    })

    useEffect(()=>{
      getdata();
    },[])
    
    let getdata=async()=>{
        try {
            let student=await axios.get(`${env.api}/student/${params.id}`)
            formik.setValues({
                name:student.data.name,
                rollno:student.data.rollno,
                age:student.data.age,
                teacher:student.data.teacher
            })
        } catch (error) {
            alert(error.response.data.message)
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
          <span style={{color:"red"}}>{formik.errors.name}</span>
          </div>
          <div className="col-lg-6">
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
            <option>teacher1</option>
            <option>teacher2</option>
          </select>
          <span style={{color:"red"}}>{formik.errors.teacher}</span>
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