import * as React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/appbar'
import { Stack, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MediaCard from '../components/coursecard';
import { grey,green } from '@mui/material/colors';
import {Paper} from '@mui/material';
import { Box } from '@mui/material';
import {Pagination} from '@mui/material';
import { useState } from 'react';
import { navigate } from 'gatsby';
import { login } from '../api/api';
import { async } from '@babel/runtime/helpers/regeneratorRuntime';
const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return (<Paper elevation={4} sx={{mt:'10%',ml:'30%',mr:'30%',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'20px'}}>
        <Stack>
            <Typography sx={{textAlign:'center',fontSize:'30px',fontFamily:'monospace',fontWeight:'700',color:'black',textDecoration:'none',mb:'5%'}}>Login</Typography>
            <Typography sx={{fontSize:'20px',fontFamily:'monospace',fontWeight:'700',color:'black',textDecoration:'none',mb:'5%'}}>Username</Typography>
            <TextField variant='outlined' onChange={(event)=>{
                setUsername(event.target.value);
            }}></TextField>
            <Typography sx={{fontSize:'20px',fontFamily:'monospace',fontWeight:'700',color:'black',textDecoration:'none',mb:'5%'}}>Password</Typography>
            <TextField variant='outlined' onChange={(event)=>{
                setPassword(event.target.value);
            }}></TextField>
            <Button sx={{mt:'5%'}} variant='contained'onClick={async()=>{
                const res=await login(username,password);
                console.log(res)
                if (res.state=="success")
                {
                    const id=res.id;
                    const role=res.role
                    localStorage.setItem("id",id);
                    localStorage.setItem("role",role)
                    navigate("/browse");
                }
                else{
                    alert("Login failed");
                }
            }}>Login</Button>            
        </Stack>
    </Paper> )   
}
export default Login