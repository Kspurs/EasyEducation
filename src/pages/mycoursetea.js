import React from "react";
import { getteachercourses } from "../api/api"; 
import ResponsiveAppBar from "../components/appbar";
import CourseCard from "../components/coursecard";
import { Box } from "@mui/material";
const MyCourseTea = () => {
    const courses=getteachercourses(localStorage.getItem("userid"))

    return (
       <main >
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box marginLeft={'20%'} marginRight={'20%'} marginTop={'10px'} display={'flex'} flexWrap={'wrap'}>
            {courses.map((course) => (<CourseCard key={course.name} coursename={course.coursename}></CourseCard>))}

        </Box>
       </main>
    )
    }