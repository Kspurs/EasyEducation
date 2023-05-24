import { Autocomplete, Box, Button, Divider, Paper, TextField, Typography ,Input} from "@mui/material";
import React, { useState } from "react";
import ResponsiveAppBar from "../components/appbar";
import { green, red } from "@mui/material/colors";
import { createcourse,uploadfile } from "../api/api";
import { navigate } from "gatsby";
import { Buffer } from "buffer";
import { async } from "@babel/runtime/helpers/regeneratorRuntime";
const weekdays=['周一','周二','周三','周四','周五','周六','周日']
const times=['8:00-9:00','9:00-10:00','10:00-11:00','11:00-12:00','13:00-14:00','14:00-15:00','15:00-16:00','16:00-17:00']
const Createcourse=()=>{
    const [coursename,setcoursename]=useState('')
    const [courseteacher,setcourseteacher]=useState('')
    const [courseweekday,setcourseweekday]=useState('')
    const [coursestarttime,setcoursestarttime]=useState('')
    const [coursemax,setcoursemax]=useState(0)
    const [coursedescription,setcoursedescription]=useState('')
    const [courseavatar,setcourseavatar]=useState(null)
    const  handleclick=async()=>
    {
        uploadfile(courseavatar,coursename+'_avatar')
        const res=await createcourse(coursename,coursedescription,courseteacher,courseweekday,coursestarttime,coursemax)
        if(res.state=="success")
        {
            alert("创建成功")
            navigate("/browse")
        }
    }
    const back=()=>{
        navigate("/browse")
    }
    return (
    <Box>
    <ResponsiveAppBar></ResponsiveAppBar>
   <Paper sx={{ml:'20%',mr:'20%',pl:'10%',pr:'10%',pb:'10%',pt:'5%',mt:'30px'}} elevation={4}>
        <Typography sx={{fontFamily:'monospace',fontWeight:'700',fontSize:'30px'}}>创建课程</Typography>

        <Divider></Divider>
        <Typography sx={{fontFamily:'monospace',fontWeight:'700',fontSize:'20px',mt:'10px',mb:'10px'}}>课程名称</Typography>
        <TextField label='课程名称' variant="outlined" onChange={(event)=>setcoursename(event.target.value)}></TextField>
        <Typography sx={{fontFamily:'monospace',fontWeight:'700',fontSize:'20px',mt:'10px',mb:'10px'}}>课程教师</Typography>
        <TextField label='课程教师' variant="outlined" onChange={(event)=>setcourseteacher(event.target.value)}> </TextField>
        <Typography sx={{fontFamily:'monospace',fontWeight:'700',fontSize:'20px',mt:'10px',mb:'10px'}}>课程时间</Typography>
        <Box justifyContent={'space-between'} display={'flex'} flexDirection={'row'}>
        <Autocomplete options={weekdays} sx={{width:'300px'}} onChange={(event,value)=>setcourseweekday(value)} renderInput={(params)=>(<TextField {...params} ></TextField>)}></Autocomplete>
        <Autocomplete options={times} sx={{width:'300px'}} onChange={(event,value)=>setcoursestarttime(value)} renderInput={(params)=>(<TextField {...params} ></TextField>)}></Autocomplete>
        
        </Box>
        <Typography sx={{fontFamily:'monospace',fontWeight:'700',fontSize:'20px',mt:'10px',mb:'10px'}}>上传课程封面</Typography>
        <Input type="file" onChange={(event)=>setcourseavatar(event.target.files[0])}></Input>
        <Typography sx={{fontFamily:'monospace',fontWeight:'700',fontSize:'20px',mt:'10px',mb:'10px'}}>最大选课人数</Typography>
        <TextField label='最大选课人数' onChange={(event)=>setcoursemax(Number.parseInt(event.target.value))}></TextField>
        <Typography sx={{fontFamily:'monospace',fontWeight:'700',fontSize:'20px',mt:'10px',mb:'10px'}}>课程简介</Typography>
        <TextField fullWidth multiline rows={10} onChange={(event,value)=>setcoursedescription(event.target.value)} sx={{height:'300px',scrollbarWidth:'none'}}></TextField>
        <Box mt="40px" display={'flex '} justifyContent={'center'}>
        <Button variant="contained" sx={{backgroundColor:green[600],mr:'10px'}} onClick={handleclick}>创建</Button>
        <Button variant="contained" onClick={()=>{back()}} sx={{backgroundColor:red[600]}}>取消</Button>
        </Box>
    </Paper>

    </Box>
    )
}
export default Createcourse