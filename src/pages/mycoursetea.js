import React from "react";
import { getteachercourses } from "../api/api"; 
import ResponsiveAppBar from "../components/appbar";
import MediaCard from "../components/coursecard";
import { Box } from "@mui/material";
import { async } from "@babel/runtime/helpers/regeneratorRuntime";
import { useState } from "react";
import { useEffect } from "react";
const MyCourseTea = () => {
    
    const [teachercourse,setteachercourse]=useState([])
    const func=async()=>{
        const tmparr=[]
        const res=await getteachercourses(localStorage.getItem("username"))
        res.data.forEach(element => {
            tmparr.push(element[0])
        });
        setteachercourse(tmparr)
    }
    useEffect(()=>{
        func()
    },[])
    return (
       <main >
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box marginLeft={'20%'} marginRight={'20%'} marginTop={'10px'} display={'flex'} flexWrap={'wrap'}>
            {teachercourse.map((course) => (<MediaCard key={course} coursename={course}></MediaCard>))}

        </Box>
       </main>
    )
    }
    export default MyCourseTea