import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
import { getSelectedCourse ,addCourse} from "../api/api";
import { async } from "@babel/runtime/helpers/regeneratorRuntime";
import { Link, navigate } from "gatsby";
const allcourses=['高等数学','C语言','大学物理','线性代数','大学英语','大学体育','大学化学','大学计算机','大学生心理健康教育','大学生职业生涯规划']

const Addcourse=()=>{
    useEffect(async()=>{
        const selectedcourses=getSelectedCourse(localStorage.getItem("id"))
    },[])
    const [selectedcourses,setSelectedCourses]=useState([])
    return(
        <Paper elevation={4} sx={{mt:'10%',ml:'30%',mr:'30%',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px'}}>
            <h1>add course</h1>
            <Stack>
                {allcourses.map((course)=>{
                    return(
                        <Box key={course} justifyContent={'space-around'} display={'flex'}>
                            <Link>{course}</Link>
                            {
                            course in selectedcourses?(<Link>已选</Link>):(<Button onClick={async()=>{
                                const res=await addCourse(localStorage.getItem("id"),course)
                                if(res.state=='success'){
                                    alert("选课成功")
                                    navigate('/addcourse')
                                }
                                else{
                                    alert("选课失败")
                                    navigate('/addcourse')
                                }
                            }}>选课</Button>)
                                
                            }
                        </Box>
                    )
                })
                }
            </Stack>
        </Paper>
    )
}
export default Addcourse