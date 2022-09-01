import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Teacher1 from "./Teacher1";

let context=createContext()


export let Provider=({children})=>{
     
    let[mdata,setmdata]=useState([])

    let[sdata,setsdata]=useState([])
    let[t1data,sett1data]=useState([])
    let[t2data,sett2data]=useState([])
    let[loading,setloading]=useState(false)

    useEffect(()=>{
   loadstudents();
    },[])

    useEffect(()=>{
        loadstudents();
         },[mdata])
     useEffect(()=>{
        let t1=sdata.filter(e=>e.teacher==="teacher1");
        sett1data(t1)
        let t2=sdata.filter(e=>e.teacher==="teacher2");
        sett2data(t2)
     },[sdata])

     
    let loadstudents=async()=>{
        try
        {
        setloading(true)
       let students=await axios.get("https://62ff703934344b6431f96fea.mockapi.io/students")
        setsdata(students.data);
        setloading(false)
        // setmdata("0")
        
    }catch(error){

    }
}


    return(
    <context.Provider value={{sdata,setsdata,t1data,setmdata,t2data,loading,mdata}}>
        {children}
    </context.Provider>
    )
}





export default context;