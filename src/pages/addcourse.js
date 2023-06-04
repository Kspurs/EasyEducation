import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
import { getSelectedCourse ,addCourse} from "../api/api";
import { async } from "@babel/runtime/helpers/regeneratorRuntime";
import { Link, navigate } from "gatsby";
import ResponsiveAppBar from "../components/appbar";
const allcourses=['高等数学','C语言','大学物理','线性代数','大学英语','大学体育','大学化学','大学计算机','大学生心理健康教育','大学生职业生涯规划']

const Addcourse=()=>{
    console.log(localStorage.getItem('username'))
    const func=async()=>{
        const res=await getSelectedCourse(localStorage.getItem("username"))
        const tmparr=[]
        console.log(res.data[0][0])
        res.data.forEach(element => {
            tmparr.push(element[0])
        });
        setSelectedCourses(tmparr)
    }
    useEffect(()=>{
        func()
    },[])
    const [selectedcourses,setSelectedCourses]=useState([])
    console.log(selectedcourses)
    return(
        <Box>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Paper elevation={4} sx={{mt:'5px',ml:'30%',mr:'30%',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px'}}>
            <h1>自主选课</h1>
            <Stack>
                {allcourses.map((course)=>{
                    return(
                        <Box key={course} justifyContent={'space-between'} display={'flex'}>
                            <Link>{course}</Link>
                            {
                            selectedcourses.includes(course) ?(<Button>已选</Button>):(<Button onClick={async()=>{
                                const res=await addCourse(localStorage.getItem("username"),course)
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
        </Box>
    )
}
export default Addcourse